import { check } from "express-validator";

export const eventValidator = [
    check('image')
    .notEmpty().withMessage('Image field must not be empty.')
    .isURL().withMessage('Image field should be a valid URL.'),

    check('name')
    .notEmpty().withMessage('Name field must not be empty.')
    .isString().withMessage('Name field should be a string.'),

    check('description')
    .notEmpty().withMessage('Description field must not be empty.')
    .isString().withMessage('Description field should be a string.')
    .isLength({max: 9999999}),

    check('cata_type')
    .notEmpty().withMessage('Type field must not be empty.')
    .isString().withMessage('Type field should be a string.'),

    check('capacity')
    .notEmpty().withMessage('Capacity field must not be empty.')
    .isNumeric().withMessage('Capacity field must be a number')
]