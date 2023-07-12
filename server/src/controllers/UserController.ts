import { Request, Response } from "express"
import { UserModel } from '../models'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class UserController {
    async show(req: Request, res: Response) {
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
    async create(req: Request, res: Response) {
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

            const doc = new UserModel({ email, fullname, avatar, passwordHash: hash });
            const user = await doc.save();

            const token = jwt.sign(
                { _id: user._id },
                `${process.env.JWT_SECRET}` || '',
                { expiresIn: process.env.JWT_MAX_AGE, algorithm: 'HS256' }
            );

            const { passwordHash, ...userData } = user.toObject();

            res.status(201).json([{
                ...userData,
                passwordHash,
                token
            },
            {
                message: 'Поздравляю! Вы зарегистрировалась.'
            }])
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: 'Не удалось зарегистрироваться.'
            })
        }
    }
    async delete(req: Request, res: Response) {
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
    async update(req: Request, res: Response) {
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
    async login(req: Request, res: Response) {
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

            res.status(201).json([{
                ...userData,
                token
            },
            {
                message: 'Авторизация прошла успешно.'
            }])
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: 'Не удалось авторизоваться.',
            });
        }
    }
    async getMe(req: Request, res: Response) {
        try {
            const user = await UserModel.findById(req.user);

            if (!user) {
                return res.status(404).json({
                    message: 'Пользователь не найден.'
                })
            }

            const { passwordHash, ...userData } = user.toObject();

            res.status(200).json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: 'Нет доступа.'
            });
        }
    }
}

export default UserController