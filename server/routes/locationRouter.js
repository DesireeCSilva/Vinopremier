import express from 'express';
import { getLocations, getOneLocation, createLocation, updateLocation, deleteLocation,   } from '../controllers/locationController.js';
import { authToken } from '../middlewares/authMiddleware.js';


const router = express.Router();

router.get("/", getLocations);
router.get("/:id", getOneLocation);
router.post("/", authToken, createLocation);
router.put("/:id", authToken, updateLocation);
router.delete("/:id", deleteLocation);

export default router;