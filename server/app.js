import connection_db from './database/connection_db.js'
import { PORT } from './config.js';
import express from 'express';
import BookingModel from "./models/BookingModel.js";
import EventModel from "./models/EventModel.js";
import LocationModel from "./models/LocationModel.js";
import UserModel from "./models/UserModel.js";
import locationRouter from "./routes/locationRouter.js"
import userRouter from "./routes/userRouter.js"

export const app = express();

app.use(express.json());
app.use('/location', locationRouter);
app.use('/user', userRouter);

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