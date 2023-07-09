import express, { Request, Response, NextFunction } from 'express'
import { UserModel } from '../models'

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        await UserModel.findOneAndUpdate(
            { _id: "64a93db13eea32c200676200" }, //TODO передавать id авторизованного пользователя
            { last_visit: new Date() },
            { new: true }
        )
        next()
    } catch (err) {
        res.status(500).json({
            message: 'Что-то пошло не так'
        });
    }
}