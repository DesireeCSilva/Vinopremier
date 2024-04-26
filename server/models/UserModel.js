import { DataTypes } from "sequelize";
import connection_db from "../database/connection_db.js";

const UserModel = connection_db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        defaultValue : 'user',
        allowNull: false
    },
},{
    tableName: 'users',
    timestamps: false
})

export default UserModel;