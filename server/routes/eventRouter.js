import express from 'express';
import { getAllEvents, createEvent, deleteEvent, updateEvent, getEventById, getEventByName } from "../controllers/eventController.js";

const eventRouter = express.Router();

eventRouter.get("/", getAllEvents);
eventRouter.post("/", createEvent);
eventRouter.delete("/:id", deleteEvent);
eventRouter.put("/:id", updateEvent);
eventRouter.get("/:id", getEventById)
eventRouter.get("/name", getEventByName);

export default eventRouter;