import { Schema, model, Document } from "mongoose"

export interface IDialog extends Document {
    sender: Schema.Types.ObjectId;
    recipient: Schema.Types.ObjectId;
    messages: Schema.Types.ObjectId[];
}

const DialogSchema = new Schema(
    {
        sender: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        recipient: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        messages: [{
            type: Schema.Types.ObjectId,
            ref: 'Message'
        }]
    },
    {
        timestamps: true
    }
)

export default model<IDialog>('Dialog', DialogSchema)