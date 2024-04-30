import express from 'express';
import { getUsers, getOneUser, createUser, updateUser, deleteUser } from '../controllers/userController.js';
import { authToken } from '../middlewares/authMiddleware.js';


const router = express.Router();

router.get("/", authToken, getUsers);
router.get("/:id", getOneUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;