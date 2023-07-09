import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import { DialogController, MessageController, UserController } from './controllers'
import { updateLastVisit, checkAuth } from './middleware'

const app = express()
dotenv.config()

app.use(express.json())
app.use(updateLastVisit)

const User = new UserController()
const Dialog = new DialogController()
const Message = new MessageController()

mongoose
    .connect(`mongodb+srv://${process.env.ADMIN}@cluster0.uyav26b.mongodb.net/chat?retryWrites=true&w=majority`)
    .then(() => console.log('DB OK'))
    .catch((err: string) => console.log('DB error', err))

app.get('/user/:id', checkAuth, User.show)
app.post('/user/register', User.create)
app.post('/user/login', User.login)
app.delete('/user/:id', checkAuth, User.delete)
app.patch('/user/:id', checkAuth, User.update)

app.get('/dialogs/:id', Dialog.index)
app.post('/dialogs', Dialog.create)
app.delete('/dialogs/:id', Dialog.delete)

app.get('/messages', Message.index)
app.post('/messages', Message.create)
app.delete('/messages/:id', Message.delete)

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server: http://localhost:${port}`)
})