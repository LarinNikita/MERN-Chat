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
            const userId = req.user;

            const messages = await MessageModel
                .find({ dialog: dialogId })
                .populate('dialog')
                .populate({ path: 'user', select: 'email fullname' })
                .populate('attachments')
                .exec();

            messages.forEach((message) => {
                if (userId?.toString() !== message.user._id.toString()) {
                    message.readed = true;
                }
            });

            await Promise.all(messages.map((message) => message.save()));

            res.json(messages);
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
                text: req.body.text,
                attachments: req.body.attachments
            }).populate('dialog user attachments');
            const message = await doc.save()

            // if (req.body.attachments) {
            //     message.attachments.push()
            // }

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
            const id = req.params.id;
            const userId = req.user;

            const message = await MessageModel.findById(id);

            if (!message) {
                return res.status(404).json({
                    message: 'Сообщение не найдено.'
                });
            }

            if (userId !== message.user.toString()) {
                return res.status(403).json({
                    message: 'У вас нет разрешения на удаление этого сообщения.'
                });
            }

            const dialogId = message.dialog;

            const messageCount = await MessageModel.countDocuments({ dialog: dialogId });

            if (messageCount === 1) {
                return res.status(403).json({
                    message: 'В диалоге осталось только одно сообщение. Нельзя его удалить.'
                });
            }

            await MessageModel.findOneAndDelete({ _id: id });

            const previousMessage = await MessageModel.findOne({ dialog: dialogId }).sort({ createdAt: -1 });

            await DialogModel.findByIdAndUpdate(
                dialogId,
                { lastMessages: previousMessage },
                { new: true }
            );

            res.json({
                success: true
            });
        } catch (err) {
            res.status(500).json({
                message: 'Ошибка сервера при удалении сообщения.'
            });
        }
    }
}

export default MessageController