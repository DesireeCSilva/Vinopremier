import axios from 'axios';
import Swal from 'sweetalert2';

const URL_LOCATION = 'http://localhost:8000/location';

export const getAllLocations = async () => {
    try {
        const response = await axios.get(URL_LOCATION);
        const data = response.data;
        return data;
    } catch (error) {
        console.log('Error al obtener las localizaciones', error);
        throw error
    }
}

export const getLocationById = async (id) => {
    try {
        const response = await axios.get(`${URL_LOCATION}/${id}`);
        const data = response.data;
        return data;
    } catch (error) {
        console.log('Error al obtener la localización por ID', error);
        throw error;
    }
}

export const postLocation = async (data) => {
    try {
        const location = await axios.post(URL_LOCATION, data);
        Swal.fire('Localización creada correctamente');
        return location.data;
    } catch (error) {
        console.log('Error al crear la localización', error);
        throw error;
    }
}

export const updateLocation = async(id, newData) => {
    try {
        const response = await axios.put(`${URL_LOCATION}/${id}`, newData);
        const data = response.data;
        Swal.fire('Localización actualizada correctamente');
        return data;
    } catch (error) {
        console.log('Error al actualizar la localización', error);
        throw error;
    }
}

export const deleteLocation = async (id) => {
    const confirmDelete = await Swal.fire({
        title: '¿Estás seguro que deseas eliminar la localización?',
        showCancelButton: true,
        confirmButtonColor: '#fb005a',
        cancelButtonColor: '#171717',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    });
    if(confirmDelete.isConfirmed) {
        try {
            const response = await axios.delete(`${URL_LOCATION}/${id}`);
            Swal.fire("Localización eliminada correctamente");
        } catch (error) {
            console.log('Error al eliminar la localización', error);
            throw error;
        }
    }
}