import axios from 'axios';

const url = 'http://localhost:8000/auth';

export const loginUser = async (data) =>{
    try{
        const response = await axios.post(`${url}/login`, data);
        if (response.data.token) {
            console.log('Se ha realizado el login correctamente!')
        }
        return response.data;
    } catch(error){
        console.error('Error de login:', error.message);
        throw error;
    }
};


export const createUser = async (data) => {
    try {
        const response = await axios.post(`${url}/register`, data);
        if (response.data.token) {
        console.log('Token recibido:', response.data.token);
        }
        return response.data;
    } catch (error) {
        console.error('Error en la solicitud de inicio de sesión: ',  error.message)};
        throw error; 
};