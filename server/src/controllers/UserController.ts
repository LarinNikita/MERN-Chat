import express from "express"
import { UserModel } from '../models'

class UserController {
    async show(req: express.Request, res: express.Response) {
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
    async create(req: express.Request, res: express.Response) {
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
    async delete(req: express.Request, res: express.Response) {
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
    async update(req: express.Request, res: express.Response) {
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
}

export default UserController