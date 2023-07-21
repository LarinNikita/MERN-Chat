import { Schema, model, Document } from "mongoose"
import { differenceInMinutes } from "date-fns";

export interface IUser extends Document {
    email: string;
    fullname: string;
    passwordHash: string;
    confirmed: boolean;
    avatar?: string;
    confirmed_hash?: string;
    last_visit: Date;
    isOnline: boolean;
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
        timestamps: true,
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    }
)

UserSchema.virtual('isOnline').get(function (this: IUser) {
    return differenceInMinutes(new Date(), this.last_visit) < 0.5;
})

export default model<IUser>('User', UserSchema)