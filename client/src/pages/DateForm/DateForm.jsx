import React from 'react'
import './DateForm.css'
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { getEventByName, postEvent } from '../../services/eventServices';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const DateForm = () => {

    const{ name } = useParams();
    const { register, handleSubmit, setValue} = useForm();
    const navigate = useNavigate()
    const [eventData, setEventData] = useState();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const decodedName = decodeURIComponent(name);
          const response = await getEventByName(decodedName);
          console.log(response)
          const { eventInstance } = response;
          console.log(eventInstance)
              setEventData(eventInstance);
    
                  setValue('id_location', eventData.id_location),
                  setValue('name', eventData.name),
                  setValue('image', eventData.image),
                  setValue('description', eventData.description),
                  setValue('cata_type', eventData.cata_type),
                  setValue('products', eventData.products),
                  setValue('price', eventData.price),
                  setValue('private_tasting_supplement', eventData.private_tasting_supplement),
                  setValue('iberian_supplement', eventData.iberian_supplement),
                  setValue('duration', eventData.duration),
                  setValue('capacity', eventData.capacity),
                  setValue('parking', eventData.parking),
                  setValue('extra_people', eventData.extra_people),
                  setValue('possibility_dinner', eventData.possibility_dinner),
                  setValue('kids', eventData.kids),
                  setValue('pets', eventData.pets),
                  setValue('accesibility', eventData.accesibility),
                  setValue('vegan_version', eventData.vegan_version),
                  setValue('english', eventData.english)

        } catch (error) {
          console.error('Error al cargar los datos del evento:', error);
        }
            };
        fetchData();
        },
      [name]);

const handleForm = async (data) => {
    try{
        const response = await postEvent(data);
            console.log(response);
            alert("Fecha añadida correctamente");
            navigate(`/detail/${encodeURIComponent(eventData.name)}`)
    }
    catch (error){
        console.error("Error al añadir fecha", error)
    }
}

  return (
    <div className="dateFormContainer">
      <h2 className="dateFormTitle">AÑADIR NUEVA FECHA</h2>
      <form className="formDate" onSubmit={handleSubmit(handleForm)}>
        <div className="newData">
        <div>
            <label htmlFor="date">Fecha</label>
            <input type="text" id="date" name="date" {...register('date', {required: true})}/>
          </div>
          <div>
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" name="time" {...register('time', {required: true})}/>
          </div>
          <input className="buttonEdit" type="submit" value="AÑADIR"/>
        </div>
        <div className="oldData">
          <div>
            <label htmlFor="id_location">Id de la localización</label>
            <input type="number" id="id_location" name="id_location" {...register('id_location', {required: true})}/>
          </div>
          <div>
            <label htmlFor="name">Nombre de la cata</label>
            <input type="text" id="name" name="name" {...register('name', {required: true})} readOnly/>
          </div>
          <div>
            <label htmlFor="image">Añadir imagen de la cata</label>
            <input type="url" id="image" name="image" {...register('image', { required: true})}readOnly/>
          </div>
          <div>
            <label htmlFor="description">Descripción</label>
            <textarea type="text" id="description" name="description" {...register('description', {required: true})}readOnly/>
          </div>
          <div>
            <label htmlFor="cata_type">Tipo de cata</label>
            <input type="text" id="cata_type" name="cata_type" {...register('cata_type', {required: true})}readOnly/>
          </div>
          <div>
            <label htmlFor="products">Productos a catar</label>
            <input type="text" id="products" name="products" {...register('products', {required: true})}readOnly/>
          </div>
          <div>
            <label htmlFor="price">Precio por persona</label>
            <input type="number" id="price" name="price" {...register('price', {required: true})}readOnly/>
          </div>
          <div>
            <label htmlFor="private_tasting_supplement">Suplemento de cata privada</label>
            <input type="number" id="private_tasting_supplement" name="private_tasting_supplement" {...register('private_tasting_supplement', {required: true})}readOnly/>
          </div>
          <div>
            <label htmlFor="iberian_supplement">Suplemento de ibéricos</label>
            <input type="number" id="iberian_supplement" name="iberian_supplement" {...register('iberian_supplement', {required: true})} readOnly/>
          </div>
          <div>
            <label htmlFor="duration">Duración</label>
            <input type="text" id="duration" name="duration" {...register('duration', {required: true})}readOnly/>
          </div>
          <div>
            <label htmlFor="capacity">Aforo máximo</label>
            <input type="number" id="capacity" name="capacity" {...register('capacity', {required: true})}readOnly/>
          </div>
          <div>
            <label htmlFor="parking">Parking</label>
            <input type="text" id="parking" name="parking" {...register('parking', { required: true})}readOnly/>
          </div>
          <div>
            <input type="checkbox" id="extra_people" name="extra_people" {...register('extra_people')}readOnly/>
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
        </div>
      </form>
  </div>
  )
}

export default DateForm