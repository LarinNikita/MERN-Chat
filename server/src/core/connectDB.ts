import mongoose from 'mongoose'

mongoose
    .connect(`mongodb+srv://${process.env.ADMIN}@cluster0.uyav26b.mongodb.net/chat?retryWrites=true&w=majority`)
    .then(() => console.log('DB OK'))
    .catch((err: string) => console.log('DB error', err))