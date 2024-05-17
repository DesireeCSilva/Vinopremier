import React from 'react'
import './CreateForm.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { postEvent } from '../../services/eventServices'



const CreateForm = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    
    
    const handleForm = async (data) =>{
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
    <div className="createFormContainer">
      <h2 className="createFormTitle">FORMULARIO DE CREACIÓN DE CATAS</h2>
      <form className="formCreate" onSubmit={handleSubmit(handleForm)}>
          <div>
            <label htmlFor="id_location">Id de la localización</label>
            <select id="id_location" name="id_location" {...register('id_location', {required: true})}>
              <option value="">Selecciona la localización</option>
              <option value="1">Calle Silvela</option>
              <option value="2">Ríos Rosas</option>
              <option value="3">Boadilla</option>
              <option value="4">Zaragoza</option>
              <option value="5">Palma</option>
            </select>
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
            <input type="text" id="description" name="description" {...register('description', {required: true})}/>
          </div>
          <div>
            <label htmlFor="cata_type">Tipo de cata</label>
            <select id="cata_type" name="cata_type" {...register('cata_type', {required: true})}>
              <option value="">Selecciona un tipo de cata</option>
              <option value="vino">Vino</option>
              <option value="cerveza">Cerveza</option>
              <option value="cava">Cava</option>
              <option value="gin">Gin</option>
              <option value="whisky">Whisky</option>
              <option value="ron">Ron</option>
              <option value="tequila">Tequila</option>
              <option value="brandy">Brandy</option>
              <option value="cognac">Cognac</option>
              </select>
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
            <label htmlFor="private_tasting_supplement">Precio por suplemento de cata privada</label>
            <input type="number" id="private_tasting_supplement" name="private_tasting_supplement" {...register('private_tasting_supplement', {required: true})}/>
          </div>
          <div>
            <label htmlFor="iberian_supplement">Precio por suplemento de ibéricos</label>
            <input type="number" id="iberian_supplement" name="iberian_supplement" {...register('iberian_supplement', {required: true})}/>
          </div>
          <div>
            <label htmlFor="date">Fecha (YYYY-MM-DD) </label>
            <input type="text" id="date" name="date" {...register('date', {required: true})}/>
          </div>
          <div>
            <label htmlFor="time">Hora (HH:mm:ss)</label>
            <input type="text" id="time" name="time" {...register('time', {required: true})}/>
          </div>
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
            <input type="checkbox" id="extra_people" name="extra_people" {...register('extra_people')} />
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
        <input className="buttonCreate" type="submit" value="PUBLICAR"/> 
    </form>
  </div>
  )
}

export default CreateForm;