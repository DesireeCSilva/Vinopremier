import connection_db from "../database/connection_db.js";
import UserModel from "../models/UserModel.js";

describe('UserModel', () => {

    beforeAll(async () => {
        await connection_db.sync();
    });


    it('should define the UserModel correctly', () => {
        expect(UserModel).toBeDefined();
    });


    it('should have the columns id, name, email, phone, password y role correctly defined', () => {
        const columns = UserModel.rawAttributes;
        expect(columns.id).toBeDefined();
        expect(columns.name).toBeDefined();
        expect(columns.email).toBeDefined();
        expect(columns.phone).toBeDefined();
        expect(columns.password).toBeDefined();
        expect(columns.role).toBeDefined();
    });


    it('should have the table name "users" correctly configured', () => {
        expect(UserModel.options.tableName).toBe('users');
    });


    afterAll(async () => {
        await connection_db.close();
    });
});