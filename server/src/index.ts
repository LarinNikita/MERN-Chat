import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import { DialogController, MessageController, UserController } from './controllers'
import { registration, login } from './validations'
import { checkAuth, updateLastVisit } from './middleware'
import { handlValidation } from './utils'

const app = express()
dotenv.config()

app.use(express.json())
app.use(checkAuth, updateLastVisit)

const User = new UserController()
const Dialog = new DialogController()
const Message = new MessageController()

mongoose
    .connect(`mongodb+srv://${process.env.ADMIN}@cluster0.uyav26b.mongodb.net/chat?retryWrites=true&w=majority`)
    .then(() => console.log('DB OK'))
    .catch((err: string) => console.log('DB error', err))

app.post('/user/registration', registration, handlValidation, User.create)
app.get('/user/me', User.getMe)
app.get('/user/:id', User.show)
app.delete('/user/:id', User.delete)
app.patch('/user/:id', registration, handlValidation, User.update)
app.post('/user/login', login, handlValidation, User.login)
//TODO: dialogs CRUD

app.post('/dialogs', Dialog.create)
app.delete('/dialogs/:id', Dialog.delete)
app.get('/dialogs', Dialog.index)

app.post('/messages', Message.create)
app.get('/messages/:id', Message.index)
app.delete('/messages/:id', Message.delete)

app.listen(process.env.PORT, () => {
    console.log(`Server: http://localhost:${process.env.PORT}`)
})