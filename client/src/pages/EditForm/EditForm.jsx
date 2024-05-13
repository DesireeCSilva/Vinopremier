import React from 'react'
import './EditForm.css'
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { getEventById, getEventByName, updateEvent, updateEventByName } from '../../services/eventServices';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const EditForm = () => {

    const{ name: initialName } = useParams();
    const { register, handleSubmit, reset, setValue, watch } = useForm();
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [eventData, setEventData] = useState();
    const [previousName, setPreviousName] = useState(initialName);

    useEffect(() => {
      const fetchData = async () => {
      try {
      const decodedName = decodeURIComponent(initialName);
      console.log(decodedName)
      const response = await getEventByName(decodedName);
      const  { eventInstance } = response;
          setEventData(eventInstance);

              setValue('id_location', eventInstance.id_location),
              setValue('name', eventInstance.name),
              setValue('image', eventInstance.image),
              setValue('description', eventInstance.description),
              setValue('cata_type', eventInstance.cata_type),
              setValue('products', eventInstance.products),
              setValue('price', eventInstance.price),
              setValue('private_tasting_supplement', eventInstance.private_tasting_supplement),
              setValue('iberian_supplement', eventInstance.iberian_supplement),
              // setValue('date', eventData.date),
              // setValue('time', eventData.time),
              setValue('duration', eventInstance.duration),
              setValue('capacity', eventInstance.capacity),
              setValue('parking', eventInstance.parking),
              setValue('extra_people', eventInstance.extra_people),
              setValue('possibility_dinner', eventInstance.possibility_dinner),
              setValue('kids', eventInstance.kids),
              setValue('pets', eventInstance.pets),
              setValue('accesibility', eventInstance.accesibility),
              setValue('vegan_version', eventInstance.vegan_version),
              setValue('english', eventInstance.english)
            } catch (error) {
              console.error('Error al cargar los datos del evento', error)
            }};
        fetchData();
        },
      [initialName, setValue]
   );
const onSubmit = async (editEvent) => {
  console.log("Evento editado", editEvent);
  setLoading(true);
      try{
        await updateEventByName(previousName, editEvent);
        alert("Datos actualizados correctamente");
        const newName = editEvent.name;
        navigate(`/detail/${encodeURIComponent(newName || previousName)}`)
      }
      catch (error) {
        console.error("Error al actualizar el evento", error);
      }
      finally{
        setLoading(false);
      }
}

  return (
    <div className="editFormContainer">
      <h2 className="editFormTitle">FORMULARIO DE EDICIÓN DE CATAS</h2>
      <form className="formEdit" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="id_location">Id de la localización</label>
            <input type="number" id="id_location" name="id_location" {...register('id_location', {required: true})}/>
          </div>
          <div>
            <label htmlFor="name">Nombre de la cata</label>
            <input type="text" id="name" name="name" {...register('name', {required: true})}/>
          </div>
          <div>
            <label htmlFor="image">Añadir imagen de la cata</label>
            <input type="url" id="image" name="image" {...register('image', { required: true})}/>
          </div>
          <div>
            <label htmlFor="description">Descripción</label>
            <textarea type="text" id="description" name="description" {...register('description', {required: true})}/>
          </div>
          <div>
            <label htmlFor="cata_type">Tipo de cata</label>
            <input type="text" id="cata_type" name="cata_type" {...register('cata_type', {required: true})}/>
          </div>
          <div>
            <label htmlFor="products">Productos a catar</label>
            <input type="text" id="products" name="products" {...register('products', {required: true})}/>
          </div>
          <div>
            <label htmlFor="price">Precio por persona</label>
            <input type="number" id="price" name="price" {...register('price', {required: true})}/>
          </div>
          <div>
            <label htmlFor="private_tasting_supplement">Suplemento de cata privada</label>
            <input type="number" id="private_tasting_supplement" name="private_tasting_supplement" {...register('private_tasting_supplement', {required: true})}/>
          </div>
          <div>
            <label htmlFor="iberian_supplement">Suplemento de ibéricos</label>
            <input type="number" id="iberian_supplement" name="iberian_supplement" {...register('iberian_supplement', {required: true})}/>
          </div>
          {/* <div>
            <label htmlFor="date">Fecha</label>
            <input type="text" id="date" name="date" {...register('date', {required: true})}/>
          </div>
          <div>
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" name="time" {...register('time', {required: true})}/>
          </div> */}
          <div>
            <label htmlFor="duration">Duración</label>
            <input type="text" id="duration" name="duration" {...register('duration', {required: true})}/>
          </div>
          <div>
            <label htmlFor="capacity">Aforo máximo</label>
            <input type="number" id="capacity" name="capacity" {...register('capacity', {required: true})}/>
          </div>
          <div>
            <label htmlFor="parking">Parking</label>
            <input type="text" id="parking" name="parking" {...register('parking', { required: true})}/>
          </div>
          <div>
            <input type="checkbox" id="extra_people" name="extra_people" {...register('extra_people')}/>
            <label htmlFor='extra_people'>Pueden asistir más personas a la cata de las que compraron las entradas</label>
          </div>
          <div>
            <input type="checkbox" id="possibility_dinner" name="posibility_dinner" {...register('possibility_dinner')}/>
            <label htmlFor='possibility_dinner'>Es posible cenar en el establecimiento</label>
          </div>
          <div>
            <input type="checkbox" id="kids" name="kids" {...register('kids')}/>
            <label htmlFor='kids'>Se puede asistir con niños</label>
          </div>
          <div>
            <input type="checkbox" id="pets" name="pets" {...register('pets')}/>
            <label htmlFor='pets'>Se puede asistir con mascotas</label>
          </div>
          <div>
            <input type="checkbox" id="accesibility" name="accesibility" {...register('accesibility')}/>
            <label htmlFor='accesibility'>Accesibilidad</label>
          </div>
          <div>
            <input type="checkbox" id="vegan_version" name="vegan_version" {...register('vegan_version')}/>
            <label htmlFor='vegan_version'>Opción vegana</label>
          </div>
          <div>
            <input type="checkbox" id="english" name="english" {...register('english')}/>
            <label htmlFor="english">Disponibilidad en inglés</label>
          </div> 
        <input className="buttonEdit" type="submit" value="PUBLICAR"/>
      </form>
  </div>
  )
}

export default EditForm