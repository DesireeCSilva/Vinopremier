import express from 'express';
import { getAllEvents, createEvent, deleteEvent, updateEvent, getEventById, getEventByName, getEventDatesByName, updateEventByName, deleteEventByName, getEventByDateAndName } from "../controllers/eventController.js";
import { authToken } from '../middlewares/authMiddleware.js';
import authRole from '../middlewares/roleMiddleware.js';

const eventRouter = express.Router();

eventRouter.get("/", getAllEvents);
eventRouter.post("/", authToken, authRole(['superadmin', 'admin']), createEvent);
eventRouter.delete("/:name", authToken, authRole(['superadmin']), deleteEventByName)
eventRouter.delete("/:id", deleteEvent);
eventRouter.put("/:name", authToken, authRole(['superadmin']), updateEventByName)
eventRouter.put("/:id", updateEvent);
eventRouter.get("/name", getEventByName);
eventRouter.get("/:eventName/dates", getEventDatesByName)
eventRouter.get("/:id", getEventById);
eventRouter.get("/:eventName/:date", getEventByDateAndName)


export default eventRouter;