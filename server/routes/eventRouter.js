import express from 'express';
import { getAllEvents, createEvent, deleteEvent, updateEvent, getEventById, getEventByName, getEventDatesByName, updateEventByName, deleteEventByName, getEventByDateAndName } from "../controllers/eventController.js";
// import { authToken } from '../middlewares/authMiddleware.js';
// import authRole from '../middlewares/roleMiddleware.js';
import { eventValidator } from '../validators/eventsValidator.js';

const eventRouter = express.Router();

eventRouter.get("/", getAllEvents);
eventRouter.post("/", eventValidator, createEvent);
eventRouter.delete("/:name", deleteEventByName)
eventRouter.delete("/:id", deleteEvent);
eventRouter.put("/:name", updateEventByName)
eventRouter.put("/:id", updateEvent);
eventRouter.get("/name", getEventByName);
eventRouter.get("/:eventName/dates", getEventDatesByName)
eventRouter.get("/:id", getEventById);
eventRouter.get("/:eventName/:date", getEventByDateAndName)


export default eventRouter;