import request from 'supertest';
import { createToken, verifyToken } from '../utils/jwt.js'; 
import { register, login } from '../controllers/authController.js';
import UserModel from '../models/UserModel.js'; 
import { createUserTest } from '../tests/test-helper/helperTest.js';

describe('Pruebas para el controlador de autenticación', () => {
    let testUser;

    beforeAll(async () => {
        testUser = await createUserTest();
    });

    describe('Pruebas para el método register', () => {
        it('debería registrar un nuevo usuario y devolver un token', async () => {
        // Llamar al método register
        const response = await request.post('/register').send({
            name: testUser.name,
            email: testUser.email,
            phone: testUser.phone,
            password: testUser.password,
        });

        // Verificar la respuesta
        expect(response.statusCode).toBe(201);
        expect(response.body.message).toBe('Usuario registrado correctamente');
        expect(response.body.data.name).toBe(testUser.name);
        expect(response.body.token).toBeDefined();

        // Verificar que el token es válido
        const decodedToken = verifyToken(response.body.token);
        expect(decodedToken).toBeDefined();
        expect(decodedToken.userId).toBe(testUser.id);
        expect(decodedToken.role).toBe(testUser.role);
        });
    });

    // describe('Pruebas para el método login', () => {
    //     it('debería permitir el inicio de sesión con credenciales válidas', async () => {
    //     // Llamar al método login
    //     const response = await request.post('/login').send({
    //         email: testUser.email,
    //         password: testUser.password,
    //     });

    //     // Verificar la respuesta
    //     expect(response.statusCode).toBe(200);
    //     expect(response.body.message).toContain(`Usuario correcto, bienvenid@ ${testUser.name}`);
    //     expect(response.body.data.name).toBe(testUser.name);
    //     expect(response.body.token).toBeDefined();

    //     // Verificar que el token es válido
    //     const decodedToken = verifyToken(response.body.token);
    //     expect(decodedToken).toBeDefined();
    //     expect(decodedToken.userId).toBe(testUser.id);
    //     expect(decodedToken.role).toBe(testUser.role);
    //     });

    //     it('debería devolver un error si las credenciales son incorrectas', async () => {
    //     // Llamar al método login con credenciales incorrectas
    //     const response = await request.post('/login').send({
    //         email: testUser.email,
    //         password: 'wrongpassword',
    //     });

    //     // Verificar la respuesta
    //     expect(response.statusCode).toBe(401);
    //     expect(response.body.error).toBe('Contraseña incorrecta');
    //     });
    // });

    // afterAll(async () => {
    //     // Limpiar el usuario de prueba de la base de datos
    //     await UserModel.destroy({ where: { email: 'test@example.com' } });
    // });

});
