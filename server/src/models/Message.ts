import mongoose, { Schema, model, Document } from "mongoose"

export interface IMessage extends Document {
    user: mongoose.Types.ObjectId;
    text?: String;
    dialog: mongoose.Types.ObjectId;
    read?: boolean;
}

const MessageSchema = new mongoose.Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        text: {
            type: String,
            required: Boolean
        },
        dialog: {
            type: Schema.Types.ObjectId,
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

export default model<IMessage>('Message', MessageSchema)