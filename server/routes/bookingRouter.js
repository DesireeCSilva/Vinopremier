import express from 'express';
import { getAllBookings, createBooking, deleteBooking, updateBooking, getBookingById } from '../controllers/bookingController.js';

const bookingRouter = express.Router();

bookingRouter.get("/", getAllBookings);
bookingRouter.post("/", createBooking);
bookingRouter.delete("/:id", deleteBooking);
bookingRouter.put("/:id", updateBooking);
bookingRouter.get("/:id", getBookingById)

export default bookingRouter;