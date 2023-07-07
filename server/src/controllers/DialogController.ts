import express from "express"
import { DialogModel, MessageModel } from '../models'

class DialogController {
    async index(req: express.Request, res: express.Response) {
        try {
            const userId: any = req.params.id
            const dialog = await DialogModel
                .find({ sender: userId })
                .populate([
                    { path: 'sender', select: ['fullname', 'avatar'] },
                    { path: 'recipient', select: ['fullname', 'avatar'] }
                ])
                .exec()
            res.json(dialog)
        } catch (err) {
            res.status(500).json({
                message: 'Не удалось получить диалог'
            })
        }
    }
    async create(req: express.Request, res: express.Response) {
        try {
            const doc = new DialogModel({
                sender: req.body.sender,
                recipient: req.body.recipient
            });
            const dialog = await doc.save()
            res.json(dialog);
        } catch (err) {
            res.status(500).json({
                message: 'Не удалось создать диалог'
            });
        }
    }
    // async delete(req: express.Request, res: express.Response) {
    //     try {
    //         const id: string = req.params.id
    //         const dialog = await DialogModel.findOneAndDelete({ _id: id })
    //         if (!dialog) {
    //             return res.status(404).json({
    //                 message: 'Диалог не найден'
    //             })
    //         }
    //         res.json({
    //             success: true
    //         })
    //     } catch (err) {
    //         res.status(500).json({
    //             message: 'Не удалось удалить диалог'
    //         })
    //     }
    // }
}

export default DialogController