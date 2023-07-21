import { Request, Response } from "express"
import socket from 'socket.io'
import { DialogModel, MessageModel } from '../models'

class MessageController {
    io: socket.Server;
    constructor(io: socket.Server) {
        this.io = io;
    }

    index = async (req: Request, res: Response) => {
        try {
            const dialogId = req.params.id;
            const message = await MessageModel
                .find({ dialog: dialogId })
                .populate('dialog')
                .populate({ path: 'user', select: 'email fullname' })
                .exec();
            res.json(message);
        } catch (err) {
            res.status(500).json({
                message: 'Не удалось получить сообщение.'
            })
        }
    }
    create = async (req: Request, res: Response) => {
        try {
            const doc = await new MessageModel({
                user: req.user,
                dialog: req.body.dialog,
                text: req.body.text
            }).populate('dialog user');
            const message = await doc.save()

            DialogModel.findOneAndUpdate(
                { _id: req.body.dialog },
                { lastMessages: message._id }
            ).exec();

            res.status(200).json(message);
            this.io.emit('SERVER:MESSAGE_CREATED', message);
        } catch (err) {
            res.status(500).json({
                message: 'Не удалось добавить сообщение.'
            })
        }
    }
    delete = async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            const message = await MessageModel.findOneAndDelete({ _id: id })

            res.json({
                success: true
            })
        } catch (err) {
            res.status(404).json({
                message: 'Сообщение не найдено.'
            })
        }
    }
}

export default MessageController