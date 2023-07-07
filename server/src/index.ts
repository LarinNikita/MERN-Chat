import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import { DialogController, MessageController, UserController } from './controllers'
// import { updateLastVisit, checkAuth } from './middleware'

const app = express()
dotenv.config()

app.use(express.json())
// app.use(updateLastVisit)
// app.use(checkAuth)

const User = new UserController()
const Dialog = new DialogController()
const Message = new MessageController()

mongoose
    .connect(`mongodb+srv://${process.env.ADMIN}@cluster0.uyav26b.mongodb.net/chat?retryWrites=true&w=majority`)
    .then(() => console.log('DB OK'))
    .catch((err: string) => console.log('DB error', err))

app.get('/user/:id', User.show)
app.post('/user/register', User.create)
app.delete('/user/:id', User.delete)
app.patch('/user/:id', User.update)

// app.get('/dialogs/:id', Dialog.index)
// app.post('/dialogs', Dialog.create)
// app.delete('/dialogs/:id', Dialog.delete)

// app.get('/messages', Message.index)
// app.post('/messages', Message.create)
// app.delete('/messages/:id', Message.delete)

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server: http://localhost:${port} happy coding []~(￣▽￣)~*`)
})