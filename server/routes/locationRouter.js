import express from 'express';
import { getAllLocations, deleteLocation, updateLocation, createLocation, getLocationById } from '../controllers/locationController.js';
import { authToken } from '../middlewares/authMiddleware.js';

const locationRouter = express.locationRouter();

locationRouter.get("/", getAllLocations);
locationRouter.post("/", authToken, createLocation);
locationRouter.delete("/:id", authToken, deleteLocation);
locationRouter.put("/:id", authToken, updateLocation);
locationRouter.get("/:id", getLocationById);

export default locationRouter;
