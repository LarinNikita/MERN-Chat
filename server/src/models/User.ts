import mongoose from "mongoose"

export interface IUser extends Document {
    email: string;
    fullname: string;
    password: string;
    confirmed: boolean;
    avatar?: string;
    confirmed_hash?: string;
    last_visit: Date;
}

const UserSchema = new mongoose.Schema(
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
        password: {
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

const UserModel = mongoose.model<IUser>('User', UserSchema)
export default UserModel