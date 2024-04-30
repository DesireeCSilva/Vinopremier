import jwt from 'jsonwebtoken';
import { TK_SECRET } from '../config.js';


export const createToken = (user) => {
    const data =  { 
        role: user.role, 
        userId: user.id 
    };
    const token = jwt.sign(data, TK_SECRET,{ expiresIn: '1h' });
    return token;
}

export const verifyToken = (tokenJwt) =>{
    try{
        return jwt.verify(tokenJwt, TK_SECRET)
    }catch(error) {
        return null;
    }
}

