// import express from 'express'
// import { UserModel } from '../models'

// export default async (req: express.Request, res: express.Response, next: express.NextFunction) => {
//     try {
//         await UserModel.findOneAndUpdate(
//             { _id: "64a7930b208c523ea61f80cc" },
//             { last_visit: new Date() },
//             { new: true }
//         )
//         next()
//     } catch (err) {
//         res.status(500).json({
//             message: 'Что-то пошло не так'
//         });
//     }
// }