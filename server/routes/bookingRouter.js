import express from 'express';
import { getAllBookings, createBooking, deleteBooking, updateBooking, getBookingById, getAllBookingsByUser } from '../controllers/bookingController.js';
import { authToken } from '../middlewares/authMiddleware.js';
import authRole from '../middlewares/roleMiddleware.js';
const bookingRouter = express.Router();

bookingRouter.get("/", authToken, authRole(['admin']), getAllBookings);
bookingRouter.post("/", authToken, createBooking);
bookingRouter.delete("/:id", authToken, deleteBooking);
bookingRouter.put("/:id", authToken, updateBooking);
bookingRouter.get("/:id", authToken, getBookingById)
bookingRouter.get("/user/:id_user", authToken, getAllBookingsByUser)

export default bookingRouter;