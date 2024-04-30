import express from 'express';
import { getAllUsers, deleteUser, createUser, updateUser, getUserById } from '../controllers/userController.js';

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);
router.get("/:id", getUserById);

export default router;