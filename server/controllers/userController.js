import bcrypt from 'bcryptjs';
import UserModel from '../models/UserModel.js';


export const getUsers = async (request, response) => {
    try {
        const users = await UserModel.findAll();
        response.status(201).json(users);
    } catch (error) {
        response.status(500).json({error: 'Internal Server Error'});
    }
}


export const getOneUser = async (request, response) => {

    const userId = request.params.id;

    try {
        const user = await UserModel.findOne({ where: { id: userId }});

        if (!user) {
            response.status(404).json({message: 'User not found'});
        }
        
        response.status(201).json(user);

    } catch (error) {
        response.status(500).json({error: 'Internal Server Error'});
    }
}


export const createUser = async (request, response) => {
    try {
        const hashedPassword = await bcrypt.hash(request.body.password, 10);
        request.body.password = hashedPassword;
        const newUser = await UserModel.create(request.body);
        response.status(201).json(newUser);
    } catch (error) {
        response.status(500).json({error: 'Internal Server Error'});
    }
}


export const updateUser = async (request, response) => {
    
    const userId = request.params.id;
    
    try {
        const hashedPassword = await bcrypt.hash(request.body.password, 10);
        request.body.password = hashedPassword;
        const existingUser = await UserModel.findByPk(userId);

        if(!existingUser) {
            response.status(404).json({message: 'User not found'});
        }
        await UserModel.update(request.body, {  where: {id: userId}});
        const updatedUser = await UserModel.findByPk(userId);
        return response.status(201).json({message: `User with ID ${userId} successfully updated`, user: updatedUser})

    } catch (error) {
        console.error(error);
        response.status(500).json({error: 'Internal Server Error'});
    }
}


export const deleteUser = async (request, response) => {
    
    const userId = request.params.id;
    
    try {
        await UserModel.destroy({where: { id: userId }});
        return response.status(200).json({ message: `User with ID ${userId} successfully deleted.`});
    } catch (error) {
        response.status(500).json({error: 'Internal Server Error'});
    }
}
