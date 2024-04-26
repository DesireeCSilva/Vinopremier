import express from 'express';
import { getAllEvents, createEvent, deleteEvent, updateEvent, getEventById } from "../controllers/eventController.js";

const router = express.Router();

router.get("/", getAllEvents);
router.post("/", createEvent);
router.delete("/:id", deleteEvent);
router.put("/:id", updateEvent);
router.get("/:id", getEventById)

export default router;