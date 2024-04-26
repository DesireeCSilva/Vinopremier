import EventModel from "../models/EventModel.js";

const getAllEvents = async (request, response) => {
    try {
        const events = await EventModel.findAll();
        response.status(201).json(events)
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

const createEvent = async (request, response) => {
    try {
        const firstAvalaiblePlaces = request.body.capacity;
        const newEvent = await EventModel.create({...request.body, avalaible_places: firstAvalaiblePlaces})
        response.status(201).json(newEvent)
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

const updateEvent = async (request, response) => {
    try {
        const { id } = request.params;
        const existingEvent = await EventModel.findByPk(id);

        if (!existingEvent) {
            response.status(404).json({message: 'Event not found'})
        }
        await EventModel.update(request.body, {where: {id}})
        const updatedEvent = await EventModel.findByPk(id)
        return response.status(201).json({message: 'Event updated succesfully', event: updateEvent})
    } catch (error) {

    }
}

const deleteEvent = async (request, response) => {
    try {
        const { id } = request.params;
        const event = await EventModel.destroy({where: {id}})
        response.status(200).json(event)
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

const getEventById = async (request, response) => {
    try {
        const { id } = request.params;
        const event = await EventModel.findByPk(id)
        response.status(201).json(event)
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}