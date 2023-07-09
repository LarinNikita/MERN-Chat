import express, { Request, Response } from "express"
import { UserModel } from '../models'
import { createJWTToken } from "../utils"

class UserController {
    async show(req: Request, res: Response) {
        try {
            const id: string = req.params.id
            const user = await UserModel.findById(id)
            res.json(user)
        } catch (err) {
            res.status(404).json({
                message: 'Пользователь не найден'
            })
        }
    }
    async create(req: Request, res: Response) {
        try {
            const doc = new UserModel({
                email: req.body.email,
                fullname: req.body.fullname,
                avatar: req.body.avatar,
                password: req.body.password
            })
            const user = await doc.save()
            res.json(user)
        } catch (err) {
            res.status(500).json({
                message: 'Не удалось зарегистрироваться'
            })
        }
    }
    async delete(req: Request, res: Response) {
        try {
            const id: string = req.params.id
            const user = await UserModel.findOneAndDelete({ _id: id })
            if (!user) {
                return res.status(404).json({
                    message: 'Пользователь не найден'
                })
            }
            res.json({
                success: true
            })
        } catch (err) {
            res.status(500).json({
                message: 'Не удалось удалить пользователя'
            })
        }
    }
    async update(req: Request, res: Response) {
        try {
            const id: string = req.params.id
            const user = await UserModel.updateOne(
                { _id: id },
                {
                    email: req.body.email,
                    fullname: req.body.fullname,
                    avatar: req.body.avatar,
                    password: req.body.password
                }
            )
            if (!user) {
                return res.status(404).json({
                    message: 'Пользователь не найден'
                })
            }
            res.json({
                success: true
            })
        } catch (err) {
            res.status(500).json({
                message: 'Не удалось обновить пользователя'
            })
        }
    }
    async login(req: Request, res: Response) {
        try {
            const user = await UserModel.findOne({ email: req.body.email });

            if (!user) {
                return res.status(404).json({
                    message: 'Неверный логин или пароль',
                });
            }

            const doc = {
                email: req.body.login,
                password: req.body.password
            }

            if (user.password === doc.password) {
                const token = createJWTToken(doc)
                res.status(200).json({
                    user,
                    token,
                });
            } else {
                res.status(404).json({
                    message: 'Неверный логин или пароль',
                });
            }

        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: 'Не удалось авторизоваться',
            });
        }
    }
}

export default UserController