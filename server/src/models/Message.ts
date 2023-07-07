import mongoose from "mongoose"

const MessageSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        text: {
            type: String,
            required: Boolean
        },
        dialog: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Dialog',
            required: true
        },
        read: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

const MessageModel = mongoose.model('Message', MessageSchema)
export default MessageModel