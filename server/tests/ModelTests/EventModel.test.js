import connection_db from "../../database/connection_db.js";
import EventModel from "../../models/EventModel.js";
// import { DataTypes } from 'sequelize';


describe('EventModel', () => {
    beforeAll(async () => {
        await connection_db.sync();
    });

    it('should define the EventModel correctly', () => {
        expect(EventModel).toBeDefined();
    });

    // it('should have the columns id, id_location, image, name, description, cata_type, capacity, avalaible_places, price, date, time, products, private_tasting_supplement, iberian_supplement, kids, extra_people, pets, possibility_dinner, duration, accesibility, parking, english, vegan_version correctly defined', () => {
    //     const columns = EventModel.rawAttributes;
    //     expect(columns.id.type).toBeInstanceOf(DataTypes.INTEGER);
    //     console.log(columns.id.type);
    //     expect(columns.id_location.type).toBeInstanceOf(DataTypes.INTEGER);
    //     expect(columns.image.type).toBeInstanceOf(DataTypes.STRING);
    //     expect(columns.name.type).toBeInstanceOf(DataTypes.STRING);
    //     expect(columns.description.type).toBeInstanceOf(DataTypes.STRING);
    //     expect(columns.cata_type.type).toBeInstanceOf(DataTypes.STRING);
    //     expect(columns.capacity.type).toBeInstanceOf(DataTypes.INTEGER);
    //     expect(columns.avalaible_places.type).toBeInstanceOf(DataTypes.INTEGER);
    //     expect(columns.price.type).toBeInstanceOf(DataTypes.DECIMAL);
    //     expect(columns.date.type).toBeInstanceOf(DataTypes.DATEONLY);
    //     expect(columns.time.type).toBeInstanceOf(DataTypes.TIME);
    //     expect(columns.products.type).toBeInstanceOf(DataTypes.STRING);
    //     expect(columns.private_tasting_supplement.type).toBeInstanceOf(DataTypes.DECIMAL);
    //     expect(columns.iberian_suplement.type).toBeInstanceOf(DataTypes.DECIMAL);
    //     expect(columns.kids.type).toBeInstanceOf(DataTypes.BOOLEAN);
    //     expect(columns.extra_people.type).toBeInstanceOf(DataTypes.BOOLEAN);
    //     expect(columns.pets.type).toBeInstanceOf(DataTypes.BOOLEAN);
    //     expect(columns.possibility_dinner.type).toBeInstanceOf(DataTypes.BOOLEAN);
    //     expect(columns.duration.type).toBeInstanceOf(DataTypes.STRING);
    //     expect(columns.accesibility.type).toBeInstanceOf(DataTypes.BOOLEAN);
    //     expect(columns.parking.type).toBeInstanceOf(DataTypes.STRING);
    //     expect(columns.english.type).toBeInstanceOf(DataTypes.BOOLEAN);
    //     expect(columns.vegan_version.type).toBeInstanceOf(DataTypes.BOOLEAN);
    // });

    it('should have the table name "Event" correctly configured', () => {
        expect(EventModel.tableName).toBe('events');
    });

    it('should have a foreign key reference to the LocationModel', async () => {
        console.log(EventModel.rawAttributes.id_location.references);
        const foreignKey = EventModel.rawAttributes.id_location.references;
        expect(foreignKey.model).toBe('locations');
    });
});