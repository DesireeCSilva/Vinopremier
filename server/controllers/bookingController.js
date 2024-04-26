import BookingModel from "../models/BookingModel.js";
import EventModel from "../models/EventModel.js";
import { getCurrentDateTimeFormatted } from "../utils/dateUtils.js";

export const getAllBookings = async (request, response) => {
    try {
        const bookings = await BookingModel.findAll();
        response.status(201).json(bookings);
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

export const createBooking = async (request, response) => {
    try {
        const {id_event, people} = request.body;
        const newBooking = await BookingModel.create({...request.body, date_booking: new Date()});
        const existingEvent = await EventModel.findByPk(id_event);

        if(!existingEvent) {
            response.status(404).json({message: 'Event not found'})
        };

        const updatedAvalaiblePlaces = existingEvent.capacity - people;
        await EventModel.update(
            { avalaible_places: updatedAvalaiblePlaces },
            { where: { id: id_event } }
        );

        response.status(201).json({
            message: "Booking created succesfully",
            booking: newBooking,
            eventMessage: "Event updated",
            event: existingEvent
        });

    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

export const deleteBooking = async (request, response) => {
    try {
        const { id } = request.params;
        const booking = await BookingModel.destroy({where: {id}})
        response.status(200).json(booking)
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

export const getBookingById = async (request, response) => {
    try {
        const { id } = request.params
        const booking = await BookingModel.findByPk(id)
        response.status(201).json(booking)
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

export const updateBooking = async (request, response) => {
    try {
        const { id } = request.params;
        const existingBooking = await BookingModel.findByPk(id);

        if (!existingBooking) {
            return response.status(404).json({ message: 'Booking not found' });
        }

        const diffPeople = request.body.people - existingBooking.people;
        await BookingModel.update(request.body, { where: { id } });

        const existingEvent = await EventModel.findByPk(existingBooking.id_event);
        if (!existingEvent) {
            return response.status(404).json({ message: 'Event not found' });
        }

        const updatedAvalaiblePlaces = existingEvent.avalaible_places - diffPeople;
        await EventModel.update({ avalaible_places: updatedAvalaiblePlaces }, { where: { id: existingEvent.id } });

        const updatedBooking = await BookingModel.findByPk(id);

        return response.status(200).json({
            message: 'Booking updated succesfully',
            booking: updatedBooking,
            eventMessage: 'Event updated succesfully',
            event: existingEvent
        });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};
