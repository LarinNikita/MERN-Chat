import express from 'express'
import mongoose from 'mongoose'

import { UserController } from './controllers'

const app = express()

app.use(express.json())

const User = new UserController()

mongoose
    .connect('mongodb+srv://admin:Vano88@cluster0.uyav26b.mongodb.net/chat?retryWrites=true&w=majority')
    .then(() => console.log('DB OK'))
    .catch((err: string) => console.log('DB error', err))

app.get('/user/:id', User.show)
app.post('/user/register', User.create)
app.delete('/user/:id', User.delete)
app.patch('/user/:id', User.update)

const port = 4444
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})