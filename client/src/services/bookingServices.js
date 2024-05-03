import axios from 'axios';
import Swal from 'sweetalert2'

const URL_BOOKING = 'http://localhost:8000/booking';

const getHeaders = () => {
    const userToken = localStorage.getItem('token');
    if (!userToken) {
        throw new Error('Token no encontrado en el almacenamiento local')
    }
    return {
        'Authorization': `Bearer ${userToken}`
    };
}

export const getAllBookings = async () => {
    try {
        const headers = getHeaders();
        const response = await axios.get(URL_BOOKING, { headers });
        const data = response.data;
        return data;
    } catch (error) {
        console.error("Error al obtener las reservas:", error);
        throw error;
    }
}

export const getBookingById = async (id) => {
    try {
        const headers = getHeaders();
        const response = await axios.get(`${URL_BOOKING}/${id}`, { headers });
        const data = response.data;
        return data;
    } catch (error) {
        console.error("Error al obtener la reserva por id", error);
        throw error;
    }
}

export const postBooking = async (data) => {
    try {
        const headers = getHeaders();
        const booking = await axios.post(URL_BOOKING, data, { headers });
        Swal.fire('Reserva creada correctamente');
        return booking.data;
    } catch (error) {
        console.error("Error al crear la reserva", error);
        throw error;
    }
}

export const updateBooking = async (id, newData) => {
    try {
        const headers = getHeaders();
        const response = await axios.put(`${URL_BOOKING}/${id}`, newData, { headers });
        const data = response.data;
        Swal.fire("Reserva actualizada correctamente");
        return data;
    } catch (error) {
        console.error("Error al actualizar la reserva", error);
        throw error;
    }
}

export const deleteBooking = async (id) => {
    const confirmDelete = await Swal.fire({
        title: '¿Estás seguro que deseas eliminar la reserva?',
        showCancelButton: true,
        confirmButtonColor: '#fb005a',
        cancelButtonColor: '#171717',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    })
    if(confirmDelete.isConfirmed) {
        try {
            const headers = getHeaders();
            const response = await axios.delete(`${URL_BOOKING}/${id}`, { headers });
            if (response.status === 200) {
                Swal.fire("Reserva eliminada correctamente");
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                Swal.fire('No estás autorizada para realizar esta acción. Por favor, inicie sesión nuevamente');
            }
        }
    }
}