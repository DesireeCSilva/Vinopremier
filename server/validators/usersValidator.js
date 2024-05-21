import { check } from 'express-validator';
import UserModel from '../models/UserModel.js';

export const userValidator = [
    check('name')
    .notEmpty().withMessage('Name field must not be empty.')
    .isString().withMessage('Name field must be a string.'),

    check('email')
    .notEmpty().withMessage('Email field must not be empty.')
    .isString().withMessage('Email field must be a valid email.')
    .custom(async (value) => {
        const existingUser = await UserModel.findOne({where: {email: value}})
        if(existingUser) {
            throw new Error('A user already exists with this e-mail address') 
        }
    }),

    check('password')
    .notEmpty().withMessage('Password field must not be empty.')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long.')
    .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter.')
    .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter.')
    .matches(/[0-9]/).withMessage('Password must contain at least one digit.')
    .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Password must contain at least one special character (!@#$%^&*(),.?":{}|<>).'),

    check('phone')
    .notEmpty().withMessage('Phone field must not be empty.')
    .isString().withMessage('Phone field must be a string')
    .isLength({min: 9, max: 9}).withMessage('Phone number must have 9 characters'),

    check('role')
    .optional()
    .isIn(['user', 'admin', 'superadmin']).withMessage('Rol field must be either "user", "admin" or "superadmin".')
    .default('user')
]

export const updateUserValidator = [
    check('name')
    .notEmpty().withMessage('Name field must not be empty.')
    .isString().withMessage('Name field must be a string.'),

    check('email')
    .notEmpty().withMessage('Email field must not be empty.')
    .isString().withMessage('Email field must be a valid email.'),

    check('password')
    .notEmpty().withMessage('Password field must not be empty.')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long.')
    .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter.')
    .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter.')
    .matches(/[0-9]/).withMessage('Password must contain at least one digit.')
    .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Password must contain at least one special character (!@#$%^&*(),.?":{}|<>).'),

    check('phone')
    .notEmpty().withMessage('Phone field must not be empty.')
    .isString().withMessage('Phone field must be a string')
    .isLength({min: 9, max: 9}).withMessage('Phone number must have 9 characters'),

    check('role')
    .optional()
    .isIn(['user', 'admin', 'superadmin']).withMessage('Rol field must be either "user", "admin" or "superadmin".')
    .default('user')
]