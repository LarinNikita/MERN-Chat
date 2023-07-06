import mongoose from "mongoose"

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
        last_visit: Date
    },
    {
        timestamps: true
    }
)

const UserModel = mongoose.model('User', UserSchema)
export default UserModel