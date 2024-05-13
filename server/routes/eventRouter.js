import express from 'express';
import { getAllEvents, createEvent, deleteEvent, updateEvent, getEventById, getEventByName, getEventDatesByName, updateEventByName, deleteEventByName } from "../controllers/eventController.js";
import { authToken } from '../middlewares/authMiddleware.js';
import authRole from '../middlewares/roleMiddleware.js';

const eventRouter = express.Router();

eventRouter.get("/", getAllEvents);
eventRouter.post("/", createEvent);
eventRouter.delete("/:name", deleteEventByName)
eventRouter.delete("/:id", deleteEvent);
eventRouter.put("/:name", updateEventByName)
eventRouter.put("/:id", updateEvent);
eventRouter.get("/name", getEventByName);
eventRouter.get("/:eventName/dates", getEventDatesByName)
eventRouter.get("/:id", getEventById);


export default eventRouter;