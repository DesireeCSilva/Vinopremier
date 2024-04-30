import UserModel from "../models/UserModel.js";
import bcrypt from 'bcryptjs'

export const getAllUsers = async (request, response) => {
    try {
        const users = await UserModel.findAll();
        response.status(201).json(users)
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

export const createUser = async  (request, response) => {
    try {
        const hashedPassword = await bcrypt.hash(request.body.password, 10);
        request.body.password = hashedPassword;
        const newUser = await UserModel.create(request.body)
        response.status(201).json(newUser)
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

export const deleteUser = async (request, response) => {
    try {
        const { id } = request.params;
        const user = await UserModel.destroy({where: {id}})
        response.status(200).json(user)
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

export const updateUser = async (request, response) => {
    try {
        const { id } = request.params;
        const hashedPassword = await bcrypt.hash(request.body.password, 10);
        request.body.password = hashedPassword;
        const existingUser = await UserModel.findByPk(id)

        if(!existingUser) {
            response.status(404).json({message: 'User not found'})
        }
        await UserModel.update(request.body, {where: {id}})
        const updatedUser = await UserModel.findByPk(id)
        return response.status(201).json({message: 'User updated succesfully', user: updatedUser})
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

export const getUserById = async (request, response) => {
    try {
        const { id } = request.params;
        const user = await UserModel.findByPk(id)

        if(!user) {
            response.status(404).json({message: 'User not found'})
        }
        response.status(201).json(user)
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}