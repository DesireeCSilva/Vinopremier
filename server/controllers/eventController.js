import EventModel from "../models/EventModel.js";
import LocationModel from "../models/LocationModel.js";

const getAllEvents = async (request, response) => {
    try {
        const events = await EventModel.findAll();
        response.status(201).json(events)
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

// const createEvent = async (request, response) => {
//     const calculatePlaces = (capacity, people) => {
//     }
// }

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