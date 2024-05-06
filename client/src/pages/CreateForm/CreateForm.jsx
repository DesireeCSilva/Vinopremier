import React from 'react'
//import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { postEvent } from '../../services/eventServices'



const CreateForm = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    
    
    const onSubmit = async (data) =>{
      try{
        console.log("hola")
        const response = await postEvent(data)
        return response.data
        alert("Evento creado correctamente")
        navigate("/")
      }
      catch(error){
        console.error("Error al crear el evento")
      }
    };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Formulario de creación de catas</h2>
      <div className="formCity">
        <label htmlFor="id_location">Id de la ciudad</label>
        <input type="text" id="id_location" name="id_location" {...register('id_location', {required: true})}/>
      </div>
      <div className="formAddress">
        <label htmlFor="address">Dirección</label>
        <input type="text" id="address" name="address" {...register('address', {required: true})}/>
      </div>
      <div className="formName">
        <label htmlFor="name">Nombre de la cata</label>
        <input type="text" id="name" name="name" {...register('name', {required: true})}/>
      </div>
      <div className="formDescription">
        <label htmlFor="description">Descripción</label>
        <input type="text" id="description" name="description" {...register('description', {required: true})}/>
      </div>
      <div className="formType">
        <label htmlFor="cata_type">Tipo de cata</label>
        <input type="text" id="cata_type" name="cata_type" {...register('cata_type', {required: true})}/>
      </div>
      <div className="formPrice">
        <label htmlFor="price">Precio por persona</label>
        <input type="text" id="price" name="price" {...register('price', {required: true})}/>
      </div>
      <div className="formPrivate">
        <label htmlFor="private_tasting_supplement">Suplemento de cata privada</label>
        <input type="text" id="private_tasting_supplement" name="private_tasting_supplement" {...register('private_tasting_supplement', {required: true})}/>
      </div>
      <div className="formIberian">
        <label htmlFor="iberian_supplement">Suplemento de ibéricos</label>
        <input type="text" id="iberian_supplement" name="iberian_supplement" {...register('iberian_supplement', {required: true})}/>
      </div>
      <div className="formTime">
        <label htmlFor="time">Hora</label>
        <input type="text" id="time" name="time" {...register('time', {required: true})}/>
      </div>
      <div className="formDuration">
        <label htmlFor="duration">Duración</label>
        <input type="text" id="duration" name="duration" {...register('duration', {required: true})}/>
      </div>
      <div className="formCapacity">
        <label htmlFor="capacity">Aforo máximo</label>
        <input type="text" id="capacity" name="capacity" {...register('capacity', {required: true})}/>
      </div>
      <div className="formExtraPeople">
        <label>Pueden asistir más personas a la cata de las que compraron las entradas</label>
        <select id="response" name="response">
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="formDinner">
        <label>Es posible cenar en el establecimiento</label>
        <select id="response" name="response">
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="formKids">
        <label>Se puede asistir con niños</label>
        <select id="response" name="response">
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="formPets">
        <label>Se puede asistir con mascotas</label>
        <select id="response" name="response">
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="formParking">
        <label htmlFor="parking">Parking</label>
        <input type="text" id="parking" name="parking" {...register('parking', { required: true})}/>
      </div>
      <div className="formAccesibility">
        <label>Accesibilidad</label>
        <select id="response" name="response">
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="formVegan">
        <label>Opción vegana</label>
        <select id="response" name="response">
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="formEnglish">
        <label htmlFor="english">Disponibilidad en inglés</label>
        <input type="text" id="english" name="english" {...register('english', { required: true})}/>
      </div>
      <div className="formImage">
        <label htmlFor="image">Añadir imagen de la cata</label>
        <input type="url" id="image" name="image" {...register('image', { required: true})}/>
      </div>
      <button className="buttonCreate" type="submit">ENVIAR</button>
    </form> 
    </div>
  )
}

export default CreateForm;