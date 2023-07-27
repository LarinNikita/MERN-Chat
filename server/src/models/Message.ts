import mongoose, { Schema, model, Document } from "mongoose"

export interface IMessage extends Document {
    user: mongoose.Types.ObjectId;
    text?: String;
    dialog: mongoose.Types.ObjectId;
    readed: boolean;
    attachments: mongoose.Types.ObjectId;
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
        readed: {
            type: Boolean,
            default: false
        },
        attachments: [{
            type: Schema.Types.ObjectId,
            ref: 'UploadFile'
        }]
    },
    {
        timestamps: true,
        usePushEach: true
    }
)

export default model<IMessage>('Message', MessageSchema)