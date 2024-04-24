import connection_db from "./database/connection_db";
import { PORT } from './config';
import express from 'express';
import BookingModel from "./models/BookingModel";
import EventModel from "./models/EventModel";
import LocationModel from "./models/LocationModel";
import UserModel from "./models/UserModel";

export const app = express();

app.use(express.json());

try {
    connection_db.authenticate();
    console.log('Connection has been established successfully.👏👏');

    BookingModel.sync();
    console.log('Model Booking connected correctly 📆📆')

    EventModel.sync();
    console.log('Model Event connected correctly 🍷🍷')

    LocationModel.sync();
    console.log('Model Location connected correctly 📍📍')

    UserModel.sync();
    console.log('Model User connected correctly 👤👤');

   } catch (error) {
    console.error('Unable to connect to the database:', error);
   }

export const server = app.listen(PORT, () => {
    console.log(`La API se esta escuchando en el puerto http://localhost:${PORT}`);
});

export default app;