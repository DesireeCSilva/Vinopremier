import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { postEvent } from '../../services/eventServices'



const CreateForm = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    
    
    const onSubmit = async (data) =>{
      try{

        //Convertir campos númericos a números decimales
        data.price = parseFloat(data.price)
        data.private_tasting_supplement = parseFloat(data.private_tasting_supplement)
        data.iberian_supplement = parseFloat(data.iberian_supplement)


        const response = await postEvent(data)
        console.log(response)
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
        <label htmlFor="id_location">Id de la localización</label>
        <input type="number" id="id_location" name="id_location" {...register('id_location', {required: true})}/>
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
      <div className="formProducts">
        <label htmlFor="products">Productos a catar</label>
        <input type="text" id="products" name="products" {...register('products', {required: true})}/>
      </div>
      <div className="formPrice">
        <label htmlFor="price">Precio por persona</label>
        <input type="number" id="price" name="price" {...register('price', {required: true})}/>
      </div>
      <div className="formPrivate">
        <label htmlFor="private_tasting_supplement">Suplemento de cata privada</label>
        <input type="number" id="private_tasting_supplement" name="private_tasting_supplement" {...register('private_tasting_supplement', {required: true})}/>
      </div>
      <div className="formIberian">
        <label htmlFor="iberian_supplement">Suplemento de ibéricos</label>
        <input type="number" id="iberian_supplement" name="iberian_supplement" {...register('iberian_supplement', {required: true})}/>
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
        <input type="number" id="capacity" name="capacity" {...register('capacity', {required: true})}/>
      </div>
      <div className="formExtraPeople">
        <label htmlFor='extra_people'>Pueden asistir más personas a la cata de las que compraron las entradas</label>
        <input type="checkbox" id="extra_people" name="extra_people" {...register('extra_people', {required: true})} defaultChecked={false}/>
      </div>
      <div className="formDinner">
        <label htmlFor='possibility_dinner'>Es posible cenar en el establecimiento</label>
        <input type="checkbox" id="possibility_dinner" name="posibility_dinner" {...register('possibility_dinner', {required: true})} defaultChecked={true}/>
      </div>
      <div className="formKids">
        <label htmlFor='kids'>Se puede asistir con niños</label>
        <input type="checkbox" id="kids" name="kids" {...register('kids', {required: true})} defaultChecked={false}/>
      </div>
      <div className="formPets">
        <label htmlFor='pets'>Se puede asistir con mascotas</label>
        <input type="checkbox" id="pets" name="pets" {...register('pets', {required: true})} defaultChecked={false}/>
      </div>
      <div className="formParking">
        <label htmlFor="parking">Parking</label>
        <input type="text" id="parking" name="parking" {...register('parking', { required: true})}/>
      </div>
      <div className="formAccesibility">
        <label htmlFor='accesibility'>Accesibilidad</label>
        <input type="checkbox" id="accesibility" name="accesibility" {...register('accesibility', { required: true})} defaultChecked={false}/>
      </div>
      <div className="formVegan">
        <label htmlFor='vegan_version'>Opción vegana</label>
        <input type="checkbox" id="vegan_version" name="vegan_version" {...register('vegan_version', { required: true})} defaultChecked={false}/>
      </div>
      <div className="formEnglish">
        <label htmlFor="english">Disponibilidad en inglés</label>
        <input type="checkbox" id="english" name="english" {...register('english', { required: true})} defaultChecked={false}/>
      </div> 
      <div className="formImage">
        <label htmlFor="image">Añadir imagen de la cata</label>
        <input type="url" id="image" name="image" {...register('image', { required: true})}/>
      </div>
      <button className="buttonCreate" type="submit">PUBLICAR</button>
    </form> 
    </div>
  )
}

export default CreateForm;