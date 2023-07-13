import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
    if (
        req.path === "/user/registration" ||
        req.path === "/user/login" ||
        req.path === "/"
    ) {
        return next();
    }

    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

    if (token) {
        try {
            const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`) as JwtPayload;
            req.user = decoded._id;
            next();
        } catch (err) {
            return res.status(403).json({
                message: 'Нет доступа'
            });
        }
    } else {
        return res.status(403).json({
            message: 'Нет доступа'
        });
    }
}