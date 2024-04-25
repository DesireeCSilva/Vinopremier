import express from 'express';
import { getAllLocations, deleteLocation, updateLocation, createLocation, getLocationById } from '../controllers/locationController.js';

const router = express.Router();

router.get("/", getAllLocations);
router.post("/", createLocation);
router.delete("/:id", deleteLocation);
router.put("/:id", updateLocation);
router.get("/:id", getLocationById);

export default router;
