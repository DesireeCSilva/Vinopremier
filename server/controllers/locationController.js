import LocationModel from "../models/LocationModel.js";

export const getAllLocations = async (request, response) => {
    try {
        const locations = await LocationModel.findAll();
        response.status(200).json(locations)
    } catch (error) {
        response.json({message: error.message})
    }
}

export const createLocation = async (request, response) => {
    try {
        const newLocation = await LocationModel.create(
            request.body
        );
        response.status(201).json(newLocation)
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

export const deleteLocation = async(request, response) => {
    try {
        const { id } = request.params;
        const location = await LocationModel.destroy({where: { id }});
        response.status(200).json(location)
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

export const updateLocation = async (request, response) => {
    try {
        const { id } = request.params;
        const existingLocation = await LocationModel.findByPk(id);

        if(!existingLocation) {
            return response.status(404).json({message: 'Location not found'})
        }

        await LocationModel.update(request.body, {where: { id }})
        const updatedLocation = await LocationModel.findByPk(id)
        response.status(201).json({message: 'Location updated succesfully', location: updatedLocation})
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

export const getLocationById = async (request, response) => {
    try {
        const { id } = request.params;
        const location = await LocationModel.findByPk(id);

        if(!location) {
            return response.status(404).json({message: 'Location not found'})
        }
        response.status(200).json(location)

    } catch (error) {
        response.status(500).json({message: error.message})
    }
}