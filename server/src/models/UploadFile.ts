import { Schema, model, Document } from "mongoose"

export interface IUploadFile extends Document {
    filename: string;
    size: number;
    ext: string;
    url: string;
    message: Schema.Types.ObjectId;
    user: Schema.Types.ObjectId;
}

const UploadFileSchema = new Schema(
    {
        filename: String,
        size: Number,
        ext: String,
        url: String,
        message: {
            type: Schema.Types.ObjectId,
            ref: 'Message'
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
)

export default model<IUploadFile>('UploadFile', UploadFileSchema)