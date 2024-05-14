import request from 'supertest';
import { app, server } from '../../app.js';
import { testAdmin, loginUser, invalidUser, invalidPasswordUser } from '../test-helper/helperTest.js';
import connection_db from '../../database/connection_db.js';


const api = request(app);

describe('REGISTER', () => {
    
    test('Register response body should return a token and status 201', async() => {
        const response = await api.post('/auth/register').send(testAdmin)
        expect(response.status).toBe(201)
    })
});


describe('LOGIN', () => {
    
    test('Login response body should return a token and status 200', async() => {
        const response = await api.post('/auth/login').send(loginUser);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
    });

    test('Login response body should contain a welcome message', async() => {
        const response = await api.post('/auth/login').send(loginUser);
        expect(response.body).toHaveProperty('message', expect.stringContaining('Usuario correcto'));
    });

    test('Login with invalid credentials should return status 401', async() => {
        const response = await api.post('/auth/login').send(invalidUser);
        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty('error', 'Usuario no encontrado');
    });

    test('Login with incorrect password should return status 401', async() => {
        const response = await api.post('/auth/login').send(invalidPasswordUser);
        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty('error', 'Contraseña incorrecta');
    });

});

afterAll(async () => {
    server.close();
    await connection_db.sync({ force: true });
    console.log('All databases are clean');
});