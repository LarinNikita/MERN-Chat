import jwt from 'jsonwebtoken'
import { IUser } from '../models/User';

export interface DecodedData {
    data: {
        _doc: IUser;
    };
}

export default (token: string): Promise<DecodedData | null> =>
    new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET || "", (err, decodedData) => {

            if (err || !decodedData) {
                return reject(err)
            }
            resolve(decodedData as DecodedData)
        })
    })