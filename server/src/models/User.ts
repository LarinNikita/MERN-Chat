import { Schema, model, Document } from "mongoose"

export interface IUser extends Document {
    email: string;
    fullname: string;
    passwordHash: string;
    confirmed: boolean;
    avatar?: string;
    confirmed_hash?: string;
    last_visit: Date;
}

const UserSchema = new Schema(
    {
        email: {
            type: String,
            require: true,
            unique: true
        },
        fullname: {
            type: String,
            require: true
        },
        avatar: String,
        passwordHash: {
            type: String,
            require: true
        },
        confirmed: {
            type: Boolean,
            default: false
        },
        confirmed_hash: String,
        last_visit: {
            type: Date,
            default: new Date()
        }
    },
    {
        timestamps: true
    }
)

export default model<IUser>('User', UserSchema)