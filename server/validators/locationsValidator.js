import { check } from 'express-validator';

export const locationValidator = [
    check('city')
    .notEmpty().withMessage('City field must not be empty.')
    .isString().withMessage('City field must be a string.'),

    check('address')
    .notEmpty().withMessage('Address field must not be empty.')
    .isString().withMessage('Address field must be a string.')
]