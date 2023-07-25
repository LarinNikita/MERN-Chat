import { Request, Response } from "express"
import { DialogModel, MessageModel } from '../models'
import socket from 'socket.io'

class DialogController {
    io: socket.Server;
    constructor(io: socket.Server) {
        this.io = io;
    }

    index = async (req: Request, res: Response) => {
        try {
            const dialog = await DialogModel
                .find()
                .or([{ sender: req.user }, { recipient: req.user }])
                .populate([
                    { path: 'sender' },
                    { path: 'recipient'},
                    { path: 'lastMessages', populate: { path: 'user' } }
                ])
                .exec()
            res.json(dialog)
        } catch (err) {
            res.status(500).json({
                message: 'Не удалось получить диалоги'
            })
        }
    }
    create = async (req: Request, res: Response) => {
        try {
            const postData = {
                sender: req.user,
                recipient: req.body.recipient
            }
            const dialogDoc = new DialogModel(postData);
            const dialog = await dialogDoc.save();

            const messageDoc = new MessageModel({
                text: req.body.text,
                user: req.user,
                dialog: dialog._id
            });
            const message = await messageDoc.save();

            dialog.lastMessages = message.id;
            await dialog.save();

            res.json(dialog);
            this.io.emit("SERVER:DIALOG_CREATED", {
                ...postData,
                dialog: dialog._id
            });
        } catch (err) {
            res.status(500).json({
                message: 'Не удалось создать диалог.'
            });
        }
    }
    delete = async (req: Request, res: Response) => {
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