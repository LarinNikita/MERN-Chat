// import express from 'express'
// import { verifyJWT } from '../utils/'

// export default (req: express.Request, res: express.Response, next: express.NextFunction) => {
//     const token = req.headers.token
//     verifyJWT(token).then((user) => {
//         req.user = user
//         next();
//     }).catch(() => {
//         res.status(403).json({
//             message: "Invalid auth token provided."
//         });
//     });
// }