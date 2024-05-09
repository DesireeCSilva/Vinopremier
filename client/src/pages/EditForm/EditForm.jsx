import React from 'react'
import './EditForm.css'

const EditForm = () => {







  return (
    <div className="editFormContainer">
      <h2 className="editFormTitle">Formulario de edición de catas</h2>
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
            <input type="text" id="description" name="description" {...register('description', {required: true})}/>
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
          <div>
            <label htmlFor="date">Fecha</label>
            <input type="text" id="date" name="date" {...register('date', {required: true})}/>
          </div>
          <div>
            <label htmlFor="time">Hora</label>
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
            <label htmlFor='extra_people'>Pueden asistir más personas a la cata de las que compraron las entradas</label>
            <input type="checkbox" id="extra_people" name="extra_people" {...register('extra_people', {required: true})} defaultChecked={false}/>
          </div>
          <div>
            <label htmlFor='possibility_dinner'>Es posible cenar en el establecimiento</label>
            <input type="checkbox" id="possibility_dinner" name="posibility_dinner" {...register('possibility_dinner', {required: true})} defaultChecked={true}/>
          </div>
          <div>
            <label htmlFor='kids'>Se puede asistir con niños</label>
            <input type="checkbox" id="kids" name="kids" {...register('kids', {required: true})} defaultChecked={false}/>
          </div>
          <div>
            <label htmlFor='pets'>Se puede asistir con mascotas</label>
            <input type="checkbox" id="pets" name="pets" {...register('pets', {required: true})} defaultChecked={false}/>
          </div>
          <div>
            <label htmlFor='accesibility'>Accesibilidad</label>
            <input type="checkbox" id="accesibility" name="accesibility" {...register('accesibility', { required: true})} defaultChecked={false}/>
          </div>
          <div>
            <label htmlFor='vegan_version'>Opción vegana</label>
            <input type="checkbox" id="vegan_version" name="vegan_version" {...register('vegan_version', { required: true})} defaultChecked={false}/>
          </div>
          <div>
            <label htmlFor="english">Disponibilidad en inglés</label>
            <input type="checkbox" id="english" name="english" {...register('english', { required: true})} defaultChecked={false}/>
          </div> 
    </form>
    <button className="buttonEdit" type="submit">PUBLICAR</button> 
  </div>
  )
}

export default EditForm