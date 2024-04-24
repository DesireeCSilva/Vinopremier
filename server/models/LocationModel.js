import { DataTypes } from 'sequelize';
import connection_db from '../database/connection_db.js';

const LocationModel = connection_db.define('Location', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
},{
    tableName: 'locations',
    timestamps: false
})

export default LocationModel;
