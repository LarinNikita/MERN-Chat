import express from "express"
import { MessageModel } from '../models'

class MessageController {
    async index(req: express.Request, res: express.Response) {
        try {
            const dialogId: any = req.query.dialog
            const message = await MessageModel
                .find({ dialog: dialogId })
                .populate('dialog')
                .exec()
            res.json(message)
        } catch (err) {
            res.status(500).json({
                message: 'Не удалось получить сообщение'
            })
        }
    }
    async create(req: express.Request, res: express.Response) {
        try {
            const userId = '64a671f7e6418134700a0af4'
            const doc = new MessageModel({
                user: userId,
                text: req.body.text,
                dialog: req.body.dialog_id
            })
            const message = await doc.save()
            res.json(message)
        } catch (err) {
            res.status(500).json({
                message: 'Не удалось добавить сообщение'
            })
        }
    }
    async delete(req: express.Request, res: express.Response) {
        try {
            const id: string = req.params.id
            const message = await MessageModel.findOneAndDelete({ _id: id })
            if (!message) {
                return res.status(404).json({
                    message: 'Сообщение не найдено'
                })
            }
            res.json({
                success: true
            })
        } catch (err) {
            res.status(500).json({
                message: 'Не удалось удалить сообщение'
            })
        }
    }
    // async update(req: express.Request, res: express.Response) {
    //     try {
    //         const id: string = req.params.id
    //         const user = await MessageModel.updateOne(
    //             { _id: id },
    //             {
    //                 email: req.body.email,
    //                 fullname: req.body.fullname,
    //                 avatar: req.body.avatar,
    //                 password: req.body.password
    //             }
    //         )
    //         if (!user) {
    //             return res.status(404).json({
    //                 message: 'Пользователь не найден'
    //             })
    //         }
    //         res.json({
    //             success: true
    //         })
    //     } catch (err) {
    //         res.status(500).json({
    //             message: 'Не удалось обновить пользователя'
    //         })
    //     }
    // }
}

export default MessageController