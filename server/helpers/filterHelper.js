import { Op } from 'sequelize';

const searchModel = (model, searchQuery) => {
    const search = searchQuery.trim();
    console.log(search);
    return model.findAll({
        where: {
            [Op.or]: [
                { cata_type: { [Op.iLike]: `%${search}%` } }
            ],
        },
    });
}

export default searchModel;