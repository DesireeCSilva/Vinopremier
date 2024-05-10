import cron from 'node-cron';
import { Op } from 'sequelize';
import EventModel from '../models/EventModel.js';

export const deleteCaducateEvents = async () => {
    try {
        const currentDate = new Date().toISOString().split('T')[0];
        await EventModel.destroy({
            where: {
                date: { [Op.lt]: currentDate }
            }
        });

        console.log('Tarea completada: Eventos caducados eliminados')
    } catch (error) {
        console.error('Error en la tarea:', error);
    }
};

cron.schedule('0 0 * * *', deleteCaducateEvents);