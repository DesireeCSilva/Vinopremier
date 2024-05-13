import express from 'express';
import { getAllEvents, createEvent, deleteEvent, updateEvent, getEventById, getEventsByFilter } from "../controllers/eventController.js";

const eventRouter = express.Router();

eventRouter.get("/", getAllEvents);
eventRouter.post("/", createEvent);
eventRouter.delete("/:id", deleteEvent);
eventRouter.put("/:id", updateEvent);
eventRouter.get("/:id", getEventById);
eventRouter.get('/filter', getEventsByFilter);

export default eventRouter;