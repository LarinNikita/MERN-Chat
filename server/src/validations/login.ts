import { body } from 'express-validator';

export default [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password should be at least 6 characters long'),
];
