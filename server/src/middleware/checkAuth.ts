import express, { Request, Response, NextFunction } from 'express'
import { verifyJWTToken } from '../utils'
import { IUser } from '../models/User'

export default (req: any, res: any, next: any) => {
    try {
        const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

        verifyJWTToken(token).then(user => {
            req.user = user
            next()
        }).catch(() => {
            res.status(403).json({
                message: 'Что-то пошло не так'
            });
        })

    } catch (err) {
        res.status(500).json({
            message: 'Что-то пошло не так'
        });
    }
}