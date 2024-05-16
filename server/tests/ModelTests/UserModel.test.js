import connection_db from "../../database/connection_db.js";
import UserModel from "../../models/UserModel.js";

describe('UserModel', () => {

    beforeAll(async () => {
        await connection_db.sync();
    });


    it('debería definir el modelo UserModel correctamente', () => {
        expect(UserModel).toBeDefined();
    });


    it('debería tener las columnas id, name, email, phone, password y role correctamente definidas', () => {
        const columns = UserModel.rawAttributes;
        expect(columns.id).toBeDefined();
        expect(columns.name).toBeDefined();
        expect(columns.email).toBeDefined();
        expect(columns.phone).toBeDefined();
        expect(columns.password).toBeDefined();
        expect(columns.role).toBeDefined();
    });


    it('debería tener la tabla "users" correctamente configurada', () => {
        expect(UserModel.options.tableName).toBe('users');
    });


    afterAll(async () => {
        await connection_db.close();
    });
});