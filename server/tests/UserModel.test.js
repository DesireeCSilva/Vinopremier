import connection_db from "../database/connection_db.js";
import UserModel from "../models/UserModel.js";

describe('UserModel', () => {
    // Antes de todas las pruebas, conectamos a la base de datos y sincronizamos los modelos
    beforeAll(async () => {
        await connection_db.sync();
    });

    // Prueba para verificar si el modelo se ha definido correctamente
    it('debería definir el modelo UserModel correctamente', () => {
        expect(UserModel).toBeDefined();
    });

    // Prueba para verificar la definición de columnas del modelo
    it('debería tener las columnas id, name, email, phone, password y role correctamente definidas', () => {
        const columns = UserModel.rawAttributes;
        expect(columns.id).toBeDefined();
        expect(columns.name).toBeDefined();
        expect(columns.email).toBeDefined();
        expect(columns.phone).toBeDefined();
        expect(columns.password).toBeDefined();
        expect(columns.role).toBeDefined();
    });

    // Prueba para verificar la configuración de la tabla
    it('debería tener la tabla "users" correctamente configurada', () => {
        expect(UserModel.options.tableName).toBe('users');
    });

    // Después de todas las pruebas, cerramos la conexión a la base de datos
    afterAll(async () => {
        await connection_db.close();
    });
});