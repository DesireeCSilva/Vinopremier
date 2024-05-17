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
    const actualDate = new Date()
    try {
        const {id_event, people} = request.body;
        const id_user = request.user.id;
        const newBooking = await BookingModel.create({...request.body, id_user, date_booking: actualDate});
        const existingEvent = await EventModel.findByPk(id_event);

        if(!existingEvent) {
            response.status(404).json({message: 'Event not found'})
        };

        const updatedAvalaiblePlaces = existingEvent.avalaible_places - people;
        await EventModel.update(
            { avalaible_places: updatedAvalaiblePlaces },
            { where: { id: id_event } }
        );
        const updatedEvent = await EventModel.findByPk(id_event)

        response.status(201).json({
            message: "Booking created succesfully",
            booking: newBooking,
            eventMessage: "Event updated",
            event: updatedEvent
        });

    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

export const deleteBooking = async (request, response) => {
    try {
        const { id } = request.params;
        const booking = await BookingModel.findByPk(id);
        
        if (!booking) {
            return response.status(404).json({ message: 'Booking not found' });
        }

        const event = await EventModel.findByPk(booking.id_event);
        
        if (!event) {
            return response.status(404).json({ message: 'Event not found' });
        }

        const updatedAvailablePlaces = event.avalaible_places + booking.people;

        await EventModel.update(
            { avalaible_places: updatedAvailablePlaces },
            { where: { id: event.id } }
        );
        const updatedEvent = await EventModel.findByPk(booking.id_event)
        const deleteBooking = await BookingModel.destroy({ where: { id } });

        response.status(200).json({ 
            message: 'Booking deleted successfully',
            eventMessage: "Event updated",
            event: updatedEvent
         });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

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

        const updatedEvent = await EventModel.findByPk(existingEvent.id)
        const updatedBooking = await BookingModel.findByPk(id);

        return response.status(200).json({
            message: 'Booking updated succesfully',
            booking: updatedBooking,
            eventMessage: 'Event updated succesfully',
            event: updatedEvent
        });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

export const getAllBookingsByUser = async (request, response) => {
    try {
        const { id_user } = request.params;
        const bookings = await BookingModel.findAll({where: {id_user: id_user}})
        response.status(201).json(bookings)
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}
