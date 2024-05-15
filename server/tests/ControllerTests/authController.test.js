import request from 'supertest';
import { app } from '../../app.js';
import { testAdmin } from '../helperTest/helperTest.js';



const api = request(app);

describe('REGISTER', () => {
    
    test('Register response body should return a token and status 201', async() => {
        const response = await api.post('/auth/register').send(testAdmin)
        expect(response.status).toBe(201)
    })
});