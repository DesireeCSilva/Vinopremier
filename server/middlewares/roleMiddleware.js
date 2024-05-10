import { verifyToken } from "../utils/jwt.js";

const authRole = (reqRole) => (request, response, next) => {
    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    try {
        const dataToken = verifyToken(token);
        const roleUser = dataToken.role;
        const rolesByUser = roleUser;
        const checkValueRole = reqRole.some((roleSingle) => rolesByUser.includes(roleSingle));
        if (!checkValueRole) {
            return response.status(401).send({ error: 'No tienes permisos para esta acción' });
        }
    } catch (error) {
        return response.status(401).send({ error: 'Error en el middleware' });
    }
    next();
}

export default authRole;