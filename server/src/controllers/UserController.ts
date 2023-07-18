import { Request, Response } from "express"
import socket from 'socket.io'
import { UserModel } from '../models'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class UserController {
    io: socket.Server;
    constructor(io: socket.Server) {
        this.io = io;
    }

    show = async (req: Request, res: Response) => {
        try {
            const user = await UserModel.findById(req.params.id)
                .select('-passwordHash -confirmed')
                .exec();
            res.status(202).json(user);
        } catch (err) {
            console.log(err);
            res.status(404).json({
                message: 'Пользователь не найден.'
            })
        }
    }
    verify = async (req: Request, res: Response) => {
        const hash = req.query.hash;

        if (!hash) {
            return res.status(400).json({ errors: 'Неккоректный хэш' })
        };

        const user = await UserModel.findOne({ confirmed_hash: hash })

        if (!user) {
            return res.status(404).json({
                status: 'error',
                message: 'Ссылка не найдена'
            })
        };

        user.confirmed = true;
        await user.save();

        res.json({
            status: 'success',
            message: 'Аккаунт успешно поддтвержден!'
        });
    }
    create = async (req: Request, res: Response) => {
        try {
            const { email, fullname, avatar, password } = req.body;

            const existingUser = await UserModel.findOne({ email });
            if (existingUser) {
                return res.status(400).json({
                    error: 'Email уже занят. Попробуйте другой.'
                });
            }

            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);
            const hash1 = await bcrypt.hash((+new Date() + ""), salt);

            const doc = new UserModel({
                email,
                fullname,
                avatar,
                passwordHash: hash,
                confirmed_hash: hash1
            });
            const user = await doc.save();

            const token = jwt.sign(
                { _id: user._id },
                `${process.env.JWT_SECRET}` || '',
                { expiresIn: process.env.JWT_MAX_AGE, algorithm: 'HS256' }
            );

            const { passwordHash, confirmed_hash, ...userData } = user.toObject();

            res.status(201).json({
                ...userData,
                passwordHash,
                confirmed_hash,
                token
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: 'Не удалось зарегистрироваться.'
            })
        }
    }
    delete = async (req: Request, res: Response) => {
        try {
            const user = await UserModel.findByIdAndDelete(req.params.id);
            res.status(202).json({
                message: `Пользователь: ${user?.fullname} удален.`
            })
        } catch (err) {
            res.status(404).json({
                message: 'Пользователь не найден.'
            })
        }
    }
    update = async (req: Request, res: Response) => {
        try {
            const user = await UserModel.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            ).select('-passwordHash -confirmed').exec();

            if (!user) {
                return res.status(404).json({
                    message: 'Пользователь не найден.'
                })
            };

            res.status(202).json(user);
        } catch (err) {
            res.status(500).json({
                message: 'Не удалось обновить пользователя.'
            })
        }
    }
    login = async (req: Request, res: Response) => {
        try {
            const user = await UserModel.findOne({ email: req.body.email });

            if (!user) {
                return res.status(404).json({
                    message: 'Неверный логин или пароль.'
                })
            }

            const isValidPassword = await bcrypt.compare(req.body.password, user.toObject().passwordHash);

            if (!isValidPassword) {
                return res.status(404).json({
                    message: 'Неверный логин или пароль.'
                })
            }

            const token = jwt.sign(
                { _id: user._id },
                `${process.env.JWT_SECRET}` || '',
                { expiresIn: process.env.JWT_MAX_AGE, algorithm: 'HS256' }
            );

            const { passwordHash, ...userData } = user.toObject();

            //Проверка на подтверждённую почту
            // if (!user.confirmed === true) {
            //     return res.status(500).json({
            //         status: 'error',
            //         message: 'Аккаунт не подтвержден'
            //     })
            // }
            if (!user.confirmed === true) {
                return res.status(500).render('Аккаунт не подтвержден')
            }

            res.status(201).json({
                ...userData,
                token
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: 'Не удалось авторизоваться.',
            });
        }
    }
    getMe = async (req: Request, res: Response) => {
        try {
            const user = await UserModel.findById(req.user);

            if (!user) {
                return res.status(404).json({
                    message: 'Пользователь не найден.'
                })
            }

            const { passwordHash, ...userData } = user.toObject();
            const isOnline = user.isOnline;

            res.status(200).json({...userData, isOnline});
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: 'Нет доступа.'
            });
        }
    }
}

export default UserController