import UserModel from '../../models/UserModel.js';

export const createUserTest = async () => {
    return await UserModel.create({
        name: 'Test User',
        email: 'test@example.com',
        phone: '666666666',
        password: '1234',
    });
};
