import EventModel from "../models/EventModel.js";
import searchModel from "../helpers/filterHelper.js";


export const getAllEvents = async (request, response) => {
    try {
        const events = await EventModel.findAll();
        response.status(200).json(events)
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

export const getEventsByFilter = async (request, response) => {
    try {
        const searchQuery = request.query.searchQuery;
        console.log(request.query);
        const events = await searchModel(EventModel, 'cata_type', searchQuery);
        response.json(events);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export const createEvent = async (request, response) => {
    try {
        const firstAvalaiblePlaces = request.body.capacity;
        const newEvent = await EventModel.create({...request.body, avalaible_places: firstAvalaiblePlaces})
        response.status(201).json(newEvent)
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

export const updateEvent = async (request, response) => {
    try {
        const { id } = request.params;
        const existingEvent = await EventModel.findByPk(id);

        if (!existingEvent) {
            response.status(404).json({message: 'Event not found'})
        }
        await EventModel.update(request.body, {where: {id}})
        const updatedEvent = await EventModel.findByPk(id)
        return response.status(201).json({message: 'Event updated succesfully', event: updatedEvent})
    } catch (error) {

    }
}

export const deleteEvent = async (request, response) => {
    try {
        const { id } = request.params;
        const event = await EventModel.destroy({where: {id}})
        response.status(200).json(event)
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

export const getEventById = async (request, response) => {
    try {
        const { id } = request.params;
        const event = await EventModel.findByPk(id)
        response.status(200).json(event)
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}
export const getEventByName = async(request, response) => {
    try {
        const names = await EventModel.findAll({
            attributes: { exclude: ['date', 'time']},
            group: ['name']
        });
        response.status(200).json(names)
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

export const getEventDatesByName = async (request, response) => {
    try {
        const encodedEventName = request.params.eventName;
        const decodedEventName = decodeURIComponent(encodedEventName);

        const eventDates = await EventModel.findAll({
            attributes: ['date', 'time', 'avalaible_places'],
            where: { name: decodedEventName }
        });

        const eventInstance = await EventModel.findOne({
            attributes: {exclude: ['date', 'time', 'avalaible_places']},
            where: { name: decodedEventName }
        });

        response.status(200).json({eventDates, eventInstance})
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}