import { body } from 'express-validator'

export const registerValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('avatar', 'Неверная ссылка на аватарку').optional().isURL(),
    body('fullname', 'Имя должно быть минимум из 2 символов').isLength({ min: 2 }),
    body('password', 'Пароль должен быть минимум из 6 символов').isLength({ min: 6 }),
]