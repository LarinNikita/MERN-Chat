import { body } from 'express-validator';

export default [
    body('email').isEmail().withMessage('Неккоректный почтовый адрес'),
    body('password').isLength({ min: 6 }).withMessage('Пароль должен состоять минимум из 6 символов')
];
