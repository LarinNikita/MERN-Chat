import { Request, Response, NextFunction } from 'express'
import { UserModel } from '../models'

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.user) {
            await UserModel.findByIdAndUpdate(
                req.user,
                { last_visit: new Date() },
                { new: true }
            )
        }
        next()
    } catch (err) {
        res.status(500).json({
            message: 'Что-то пошло не так.'
        });
    }
}