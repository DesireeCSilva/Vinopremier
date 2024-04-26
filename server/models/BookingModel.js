import { DataTypes } from "sequelize";
import connection_db from "../database/connection_db.js";
import UserModel from "./UserModel.js";
import EventModel from "./EventModel.js";


const BookingModel = connection_db.define('Booking', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_event: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: EventModel,
            key: 'id' 
        }
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: UserModel,
            key: 'id' 
        }
    },
    people: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date_booking: {
        type: DataTypes.DATE,
        allowNull: false,
    },
},{
    tableName: 'bookings',
    timestamps: false
})

EventModel.hasMany(BookingModel, { foreignKey: 'id_event' });

UserModel.hasMany(BookingModel, { foreignKey: 'id_user' });

export default BookingModel;