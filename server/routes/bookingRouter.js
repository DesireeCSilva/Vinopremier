import express from 'express';
import { getAllBookings, createBooking, deleteBooking, updateBooking, getBookingById } from '../controllers/bookingController.js';

const router = express.Router();

router.get("/", getAllBookings);
router.post("/", createBooking);
router.delete("/:id", deleteBooking);
router.put("/:id", updateBooking);
router.get("/:id", getBookingById)

export default router;