import axios from 'axios';
import Swal from 'sweetalert2';

const URL_EVENT = 'http://localhost:8000/event';

export const getAllEvents = async () => {
    try {
        const response = await axios.get(URL_EVENT);
        const data = response.data;
        return data
    } catch (error) {
        console.log('Error al obtener los eventos', error);
        throw error
    }
}

export const getEventById = async (id) => {
    try {
        const response = await axios.get(`${URL_EVENT}/${id}`)
        const data = response.data;
        return data;
    } catch (error) {
        console.log('Error al obtener el evento por ID', error);
        throw error;
    }
}

export const getEventByName = async(name) => {
    try {
        const response = await axios.get(`${URL_EVENT}/${encodeURIComponent(name)}/dates`);
        const data = response.data;
        return data;
    } catch (error) {
        console.log('Error al obtener el evento por nombre', error);
        throw error;
    }
}

export const postEvent = async(data) => {
    try {
        const event = await axios.post(URL_EVENT, data);
        Swal.fire('Evento creado correctamente');
        return event.data;
    } catch (error) {
        console.log('Error al crear el evento', error);
        throw error
    }
}

export const updateEvent = async (id, newData) => {
    try {
        const response = await axios.put(`${URL_EVENT}/${id}`, newData);
        const data = response.data;
        Swal.fire('Evento actualizado correctamente');
        return data;
    } catch (error) {
        console.log('Error al actualizar el evento', error);
        throw error;
    }
}

export const deleteEvent = async (id) => {
    const confirmDelete = await Swal.fire({
        title: '¿Estás seguro que deseas eliminar el evento?',
        showCancelButton: true,
        confirmButtonColor: '#fb005a',
        cancelButtonColor: '#171717',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    });
    if(confirmDelete.isConfirmed) {
        try {
            const response = await axios.delete(`${URL_EVENT}/${id}`);
            Swal.fire("Evento eliminado correctamente");
        } catch (error) {
            console.log('Error al eliminar el evento', error);
            throw error;
        }
    }
}

export const getEventsByFilter = async (searchQuery) => {
    try {
        const response = await axios.get(`${URL_EVENT}/filter?searchQuery=${searchQuery}`);
        const data = response.data;
        return data;
    } catch (error) {
        console.log('Error al obtener eventos por filtro', error);
        throw error;
    }
}
