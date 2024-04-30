import axios from 'axios';
import Swal from 'sweetalert2'

const URL_BOOKING = 'http://localhost:8000/booking';

export const getAllBookings = async () => {
    try {
        const response = await axios.get(URL_BOOKING);
        const data = response.data;
        return data;
    } catch (error) {
        console.error("Error al obtener las reservas:", error);
        throw error;
    }
}

export const getBookingById = async (id) => {
    try {
        const response = await axios.get(`${URL_BOOKING}/${id}`);
        const data = response.data;
        return data;
    } catch (error) {
        console.error("Error al obtener la reserva por id", error);
        throw error;
    }
}

export const postBooking = async (data) => {
    try {
        const booking = await axios.post(URL_BOOKING, data);
        Swal.fire('Reserva creada correctamente');
        return booking;
    } catch (error) {
        console.error("Error al crear la reserva", error);
        throw error;
    }
}

export const updateBooking = async (id, newData) => {
    try {
        const response = await axios.put(`${URL_BOOKING}/${id}`, newData);
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
            const response = await axios.delete(`${URL_BOOKING}/${id}`);
            if (response.status === 200) {
                Swal.fire("Reserva eliminada correctamente");
            }
        } catch (error) {
            console.error("Error al eliminar la reserva", error);
            throw error;
        }
    }
}