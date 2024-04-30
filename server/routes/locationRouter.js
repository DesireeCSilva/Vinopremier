import express from 'express';
import { getAllLocations, deleteLocation, updateLocation, createLocation, getLocationById } from '../controllers/locationController.js';
import { authToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get("/", getAllLocations);
router.post("/", authToken, createLocation);
router.delete("/:id", authToken, deleteLocation);
router.put("/:id", authToken, updateLocation);
router.get("/:id", getLocationById);

export default router;
