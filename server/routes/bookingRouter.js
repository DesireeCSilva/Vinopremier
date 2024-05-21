import express from 'express';
import { getAllBookings, createBooking, deleteBooking, updateBooking, getBookingById, getAllBookingsByUser } from '../controllers/bookingController.js';
import { authToken } from '../middlewares/authMiddleware.js';
import authRole from '../middlewares/roleMiddleware.js';
import { bookingValidator } from '../validators/bookingsValidator.js';
import { handleValidationResults } from '../helpers/validateHelper.js';
const bookingRouter = express.Router();

bookingRouter.get("/", authToken, authRole(['admin']), getAllBookings);
bookingRouter.post("/", authToken, authRole(['user', 'admin', 'superadmin']), createBooking);
bookingRouter.delete("/:id", authToken, authRole(['user', 'admin', 'superadmin']), deleteBooking);
bookingRouter.put("/:id", authToken, updateBooking);
bookingRouter.get("/:id", authToken, getBookingById)
bookingRouter.get("/user/:id_user", authToken, authRole(['user', 'admin', 'superadmin']), getAllBookingsByUser)

export default bookingRouter;