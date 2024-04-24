import { DataTypes } from "sequelize";
import connection_db from "../database/connection_db";
import LocationModel from "./LocationModel";


const EventModel = connection_db.define('Event', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_location: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: LocationModel,
            key: 'id' 
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cata_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    available_places: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: capacity
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false
    },
},{
    tableName: 'events',
    timestamps: false
})

LocationModel.hasMany(EventModel, { foreignKey: 'id_location' });

export default EventModel;