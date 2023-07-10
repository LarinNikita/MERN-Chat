import { Request, Response } from "express"
import { DialogModel, MessageModel } from '../models'

class DialogController {
    async index(req: Request, res: Response) {
        try {
            const userId = req.user

            console.log(userId)

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
    async create(req: Request, res: Response) {
        try {
            const dialogDoc = new DialogModel({
                sender: req.body.sender,
                recipient: req.body.recipient
            })
            const dialog = await dialogDoc.save();

            const messageDoc = new MessageModel({
                text: req.body.text,
                user: req.body.sender,
                dialog: dialog._id
            });
            const message = await messageDoc.save();

            dialog.messages.push(message._id);
            await dialog.save();

            res.json(dialog);

        } catch (err) {
            res.status(500).json({
                message: 'Не удалось создать диалог',
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