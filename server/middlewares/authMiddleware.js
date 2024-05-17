import { verifyToken } from '../utils/jwt.js';

export const authToken = async (request, response, next) => {
    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token){
        return response.status(401).json({message:"No token provided"});
    }
    try {
        const dataToken = await verifyToken(token);
        console.log(dataToken);
        const userId = dataToken.userId;
        request.user = { id: userId }; 
        
        next();
    } catch (error) {
        return response.status(401).json({ message: "Invalid Token!" });
    }
};
