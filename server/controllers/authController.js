import bcrypt from 'bcryptjs';
import { createToken } from "../utils/jwt.js";
import UserModel from "../models//UserModel.js";


export const register = async (request, response) => {
    try {
        const passwordHash = await bcrypt.hash(request.body.password, 10);
        request.body.password = passwordHash;
        const newUser = await UserModel.create(request.body);
        const token = createToken(newUser);
        console.log(token + 'Hola desde el controlador')
        response.status(201).json({message: 'Usuario registrado correctamente', data: newUser, token})
    
    } catch (error) {
        console.error(error);
        return response.status(500).send({message: 'Internal Server Error' });
    }
}

export const login = async (request, response) => {
    try {
        const { email, password } = request.body;

        const user = await UserModel.findOne({ where: { email } });

        if(!user) {
            return response.status(401).send({ error: 'Usuario no encontrado' });
        }
        const hashPassword = user.get('password');
        const checkPassword = await bcrypt.compare(password, hashPassword);
        const tokenSession = createToken(user);
        const userName = user.get('name');
        if (checkPassword) {
            const noPassword = { ...user.toJSON(), password: undefined };
            return response.send({
                message: `Usuario correcto, bienvenid@ ${userName}`,
                data: noPassword,
                token: tokenSession
            });
        } else {
            return response.status(401).send({ error: 'Contraseña incorrecta' });
        }
    } catch (error) {
        console.error(error);
        return response.status(500).send({ error: 'Error interno del servidor' });
    }
}