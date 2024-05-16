import * as yup from 'yup';

const currentDate = new Date().toISOString().split('T')[0];

export const eventSchema = yup.object().shape({
    id_location: yup.number().required('Id de la localización es obligatorio'),
    name: yup.string().required('El nombre es obligatorio').max(100, 'Máximo 100 caracteres'),
    image: yup.string().required('La imagen es obligatoria').url('Debe ser una URL válida'),
    description: yup.string().required('La descripción es obligatoria').max(9999999, 'Descripción demasiado larga'),
    cata_type: yup.string().required('El tipo de cata es obligatorio'),
    products: yup.string().required('Los productos son obligatorios'),
    price: yup.number().required('El precio es obligatorio').min(0, 'Debe ser un número positivo'),
    private_tasting_supplement: yup.number().required('El suplemento privado es obligatorio').min(0, 'Debe ser un número positivo'),
    iberian_supplement: yup.number().required('El suplemento ibérico es obligatorio').min(0, 'Debe ser un número positivo'),
    date: yup.string()
        .required('La fecha es obligatoria')
        .matches(/^\d{4}-\d{2}-\d{2}$/, 'Debe estar en formato YYYY-MM-DD')
        .test('not-in-past', 'La fecha no puede estar en el pasado', value => value >= currentDate),
    time: yup.string()
        .required('La hora es obligatoria')
        .matches(/^\d{2}:\d{2}:\d{2}$/, 'Debe estar en formato hh:mm:ss'),
    duration: yup.string().required('La duración es obligatoria'),
    capacity: yup.number().required('La capacidad es obligatoria').min(1, 'Debe ser al menos 1'),
    parking: yup.string().required('El parking es obligatorio'),
    extra_people: yup.boolean(),
    possibility_dinner: yup.boolean(),
    kids: yup.boolean(),
    pets: yup.boolean(),
    accesibility: yup.boolean(),
    vegan_version: yup.boolean(),
    english: yup.boolean().required('La disponibilidad en inglés es obligatoria'),
});
