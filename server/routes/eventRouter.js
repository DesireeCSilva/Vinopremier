import express from 'express';
import { getAllEvents, createEvent, deleteEvent, updateEvent, updateEventByName, getEventByName, getEventDatesByName, getEventById, getEventsByFilter } from "../controllers/eventController.js";

const eventRouter = express.Router();

eventRouter.get("/", getAllEvents);
eventRouter.post("/", createEvent);
eventRouter.delete("/:id", deleteEvent);
eventRouter.put("/:name", updateEventByName)
eventRouter.put("/:id", updateEvent);
eventRouter.get("/name", getEventByName);
eventRouter.get("/:eventName/dates", getEventDatesByName)
eventRouter.get("/:id", getEventById);
eventRouter.get('/filter', getEventsByFilter);

export default eventRouter;