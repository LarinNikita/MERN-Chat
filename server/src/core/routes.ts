import express from "express"
import cors from 'cors'
import {Server} from 'socket.io'
import { DialogCtrl, MessageCtrl, UserCtrl } from "../controllers"
import { checkAuth, updateLastVisit } from "../middleware"
import { login, registration } from "../validations";
import { handlValidation } from "../utils";

const createRoutes = (app: express.Express, io: Server) => {
    const UserController = new UserCtrl(io)
    const DialogController = new DialogCtrl(io)
    const MessageController = new MessageCtrl(io)

    app.use(express.json())
    app.use(cors())
    app.use(checkAuth, updateLastVisit)

    app.post('/user/login', login, handlValidation, UserController.login)
    app.post('/user/registration', registration, handlValidation, UserController.create)
    app.get('/user/me', UserController.getMe)
    app.get('/user/:id', UserController.show)
    app.delete('/user/:id', UserController.delete)
    app.patch('/user/:id', registration, handlValidation, UserController.update)

    app.post('/dialogs', DialogController.create)
    app.delete('/dialogs/:id', DialogController.delete)
    app.get('/dialogs', DialogController.index)

    app.post('/messages', MessageController.create)
    app.get('/messages/:id', MessageController.index)
    app.delete('/messages/:id', MessageController.delete)
};

export default createRoutes;