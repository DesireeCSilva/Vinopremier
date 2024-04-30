import express from 'express';
import { register, login } from '../controllers/authController.js';


const authRouter = express.authRouter();

authRouter.post('/register', register)
authRouter.post('/login', login);


export default authRouter;