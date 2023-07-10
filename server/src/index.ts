import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import { UserController } from './controllers'
import { registration } from './validations'
import handlValidation from './utils/handlValidation'
import { checkAuth } from './middleware'

const app = express()
dotenv.config()

app.use(express.json())

const User = new UserController()

mongoose
    .connect(`mongodb+srv://${process.env.ADMIN}@cluster0.uyav26b.mongodb.net/chat?retryWrites=true&w=majority`)
    .then(() => console.log('DB OK'))
    .catch((err: string) => console.log('DB error', err))

app.post('/user/registration', registration, handlValidation, User.create)
app.get('/user/:id', checkAuth, User.show)
app.delete('/user/:id', checkAuth, User.delete)
app.patch('/user/:id', checkAuth, registration, handlValidation, User.update)
//TODO: авторизация, getMe, last_visit, messages and dialogs CRUD

app.listen(process.env.PORT, () => {
    console.log(`Server: http://localhost:${process.env.PORT}`)
})