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
    .isNumeric().withMessage('Capacity field must be an integer number'),

    check('avalaible_places')
    .optional()
    .isNumeric().withMessage('Avalaible places field must be an integer number'),

    check('price')
    .notEmpty().withMessage('Price field must not be empty.')
    .isFloat({min: 0}).withMessage('Price field must be a positive decimal number.'),

    check('date')
    .notEmpty().withMessage('Date field must not be empty.')
    .isISO8601().withMessage('Date field must be in format YYYY-MM-DD.')
    .custom((value) => {
        const currentDate = new Date().toISOString().split('T')[0];
        if (value < currentDate) {
            throw new Error('Date cannot be in the past');
        }
        return true;
    }),

    check('time')
    .notEmpty().withMessage('Time field must not be empty')
    .isISO8601().withMessage('Time field must be in format hh:mm:ss'),

    check('products')
    .notEmpty().withMessage('Products field must not be empty.')
    .isString().withMessage('Products field should be a string.'),

    check('private_tasting_supplement')
    .notEmpty().withMessage('Private supplement field must not be empty.')
    .isFloat({min: 0}).withMessage('Private supplement field must be a positive decimal number.'),

    check('iberian_supplement')
    .notEmpty().withMessage('Iberian supplement field must not be empty.')
    .isFloat({min: 0}).withMessage('Iberian supplement field must be a positive decimal number.'),

    check('kids')
    .optional()
    .isBoolean().withMessage('Kids field must be a boolean'),

    check('extra_people')
    .optional()
    .isBoolean().withMessage('Extra people field must be a boolean'),

    check('pets')
    .optional()
    .isBoolean().withMessage('Pets field must be a boolean'),

    check('possibility_dinner')
    .optional()
    .isBoolean().withMessage('Possibility dinner field must be a boolean'),

    check('duration')
    .notEmpty().withMessage('Duration field must not be empty.')
    .isString().withMessage('Duration field should be a string.'),

    check('accesibility')
    .optional()
    .isBoolean().withMessage('Possibility dinner field must be a boolean'),

    check('parking')
    .notEmpty().withMessage('Parking field must not be empty.')
    .isString().withMessage('Parking field should be a string.'),

    check('english')
    .notEmpty().withMessage('English field must not be empty.')
    .isBoolean().withMessage('English field must be a boolean'),

    check('vegan_version')
    .notEmpty().withMessage('Vegan version field must not be empty.')
    .isBoolean().withMessage('Vegan version field must be a boolean')
]