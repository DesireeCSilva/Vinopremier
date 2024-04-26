import express from 'express';
import { getLocations, getOneLocation, createLocation, updateLocation, deleteLocation,   } from '../controllers/locationController.js';

const router = express.Router();

router.get("/", getLocations);
router.get("/:id", getOneLocation);
router.post("/", createLocation);
router.put("/:id", updateLocation);
router.delete("/:id", deleteLocation);

export default router;