import { Request, Response } from "express"
import { DialogModel, MessageModel } from '../models'

class DialogController {
    async index(req: Request, res: Response) {
        try {
            const dialog = await DialogModel
                .find({ sender: req.user })
                .populate([
                    { path: 'sender', select: 'fullname avatar' },
                    { path: 'recipient', select: 'fullname avatar' },
                    { path: 'messages', select: 'user' }
                ])
                .exec()
            res.json(dialog)
        } catch (err) {
            res.status(500).json({
                message: 'Не удалось получить диалог.'
            })
        }
    }
    async create(req: Request, res: Response) {
        try {
            const { sender, recipient } = req.body;
            const dialogDoc = new DialogModel({ sender, recipient });
            const dialog = await dialogDoc.save();

            const messageDoc = new MessageModel({
                text: req.body.text,
                user: req.body.sender,
                dialog: dialog._id
            });
            const message = await messageDoc.save();

            dialog.messages.push(message.toObject());
            await dialog.save();

            res.json(dialog);
        } catch (err) {
            res.status(500).json({
                message: 'Не удалось создать диалог.'
            });
        }
    }
    async delete(req: Request, res: Response) {
        try {
            const id: string = req.params.id
            const dialog = await DialogModel.findOneAndDelete({ _id: id })
            if (!dialog) {
                return res.status(404).json({
                    message: 'Диалог не найден'
                })
            }
            res.json({
                success: true
            })
        } catch (err) {
            res.status(500).json({
                message: 'Не удалось удалить диалог'
            })
        }
    }
}

export default DialogController