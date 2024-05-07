import { DataTypes } from "sequelize";
import connection_db from "../database/connection_db.js";
import LocationModel from "./LocationModel.js";

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
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
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
    avalaible_places: {
        type: DataTypes.INTEGER,
        allowNull: false
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
    products: {
        type: DataTypes.STRING,
        allowNull: false
    },
    private_tasting_supplement: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    iberian_supplement: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    kids: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    extra_people: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    pets: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    possibility_dinner: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false
    },
    accesibility: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    parking: {
        type: DataTypes.STRING,
        allowNull: false
    },
    english: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    vegan_version: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }

}, {
    tableName: 'events',
    timestamps: false
})

LocationModel.hasMany(EventModel, {foreignKey: 'id_location'})

export default EventModel;