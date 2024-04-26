import LocationModel from "../models/LocationModel.js";

export const getLocations = async (request, response) => {
    try {
        const locations = await LocationModel.findAll();
        response.status(201).json(locations);
    } catch (error) {
        response.status(500).json({error: 'Internal Server Error'});
    }
}

export const getOneLocation = async (request, response) => {

    const locationId = request.params.id;

    try {
        const location = await LocationModel.findOne({ where: { id: locationId }});

        if (!location) {
            response.status(404).json({message: 'Location not found'});
        }
        
        response.status(201).json(location);

    } catch (error) {
        response.status(500).json({error: 'Internal Server Error'});
    }
}

export const createLocation = async (request, response) => {
    
    try {
        const newLocation = await LocationModel.create(request.body);
        response.status(201).json(newLocation);
    
    } catch (error) {
        console.error(error);
        response.status(500).json({error: 'Internal Server Error'})
    }
}

export const updateLocation = async (request, response) => {
    
    const locationId = request.params.id;
    
    try {
        const existingLocation = await LocationModel.findByPk(locationId);

        if(!existingLocation) {
            response.status(404).json({message: 'Location not found'});
        }
        await LocationModel.update(request.body, {  where: {id: locationId}});
        const updatedLocation = await LocationModel.findByPk(locationId);
        return response.status(201).json({message: `Location with ID ${locationId} successfully updated`, location: updatedLocation})

    } catch (error) {
        console.error(error);
        response.status(500).json({error: 'Internal Server Error'});
    }
}

export const deleteLocation = async (request, response) => {
    
    const locationId = request.params.id;
    
    try {
        await LocationModel.destroy({where: { id: locationId }});
        return response.status(200).json({ message: `Location with ID ${locationId} successfully deleted.`});
    } catch (error) {
        response.status(500).json({error: 'Internal Server Error'});
    }
}