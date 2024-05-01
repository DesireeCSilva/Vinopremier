import express from 'express';
import { getAllBookings, createBooking, deleteBooking, updateBooking, getBookingById } from '../controllers/bookingController.js';
import { authToken } from '../middlewares/authMiddleware.js';
const bookingRouter = express.Router();

bookingRouter.get("/", authToken, getAllBookings);
bookingRouter.post("/", authToken, createBooking);
bookingRouter.delete("/:id", authToken, deleteBooking);
bookingRouter.put("/:id", authToken, updateBooking);
bookingRouter.get("/:id", authToken, getBookingById)

export default bookingRouter;