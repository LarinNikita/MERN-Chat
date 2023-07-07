import mongoose from "mongoose"

const DialogSchema = new mongoose.Schema(
    {
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        recipient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        messages: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message'
        }]
    },
    {
        timestamps: true
    }
)

const DialogModel = mongoose.model('Dialog', DialogSchema)
export default DialogModel