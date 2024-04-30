import express from 'express';
import { getAllEvents, createEvent, deleteEvent, updateEvent, getEventById } from "../controllers/eventController.js";

const eventRouter = express.eventRouter();

eventRouter.get("/", getAllEvents);
eventRouter.post("/", createEvent);
eventRouter.delete("/:id", deleteEvent);
eventRouter.put("/:id", updateEvent);
eventRouter.get("/:id", getEventById)

export default eventRouter;