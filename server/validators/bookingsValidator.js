import { check } from "express-validator";

export const bookingValidator = [
    check('people')
    .notEmpty().withMessage('People field must not be empty.')
    .isNumeric().withMessage('People field must be an integer number.'),

    check('english')
    .optional()
    .isBoolean().withMessage('English field must be a boolean.'),

    check('vegan_version')
    .optional()
    .isBoolean().withMessage('Vegan version field must be a boolean.'),

    check('vegan_people')
    .optional()
    .isNumeric().withMessage('Vegan people field must be an integer number.'),

    check('date_booking')
    .notEmpty().withMessage('Date booking field must not be empty.')
    .isDate().withMessage('Date booking field must be a valid date.')
]