import express from 'express';
import { getAllUsers, deleteUser, createUser, updateUser, getUserById } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/", createUser);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updateUser);
userRouter.get("/:id", getUserById);

export default userRouter;