import React from 'react'

const CreateForm = () => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h2>Formulario de creación de catas</h2>
      <div className="formCity">
        <label>Ciudad</label>
        <input type="text" {...RegisterForm('id_location', {pattern: /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s\.,:;!¿¡?]+$/, required: true, maxLength:  40})}/>
      </div>
      <div className="formDirection">
        <label>Dirección</label>
        {/* <input type="text" {...RegisterForm('', {pattern: /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s\.,:;!¿¡?]+$/, required: true, maxLength:  40})}/> */}
      </div>
      <div className="formName">
        <label>Nombre de la cata</label>
        <input type="text" {...RegisterForm('name', {pattern: /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s\.,:;!¿¡?]+$/, required: true, maxLength:  40})}/>
      </div>
      <div className="formDescription">
        <label>Descripción</label>
        <input type="text" {...RegisterForm('description', {pattern: /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s\.,:;!¿¡?]+$/, required: true, maxLength:  1000})}/>
      </div>
      <div className="formType">
        <label>Tipo de cata</label>
        <input type="text" {...RegisterForm('cata_type', {pattern: /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s\.,:;!¿¡?]+$/, required: true, maxLength:  40})}/>
      </div>
      <div className="formPrice">
        <label>Precio por persona</label>
        <input type="text" {...RegisterForm('price', {pattern: /^[0-9]+(?:\.\d{1,2})?$|^\u0024|\u20AC$/, required: true, maxLength:  40})}/>
      </div>
      <div className="formPrivate">
        <label>Suplemento de cata privada</label>
        <input type="text" {...RegisterForm('private_tasting_supplement', {pattern: /^[0-9]+(?:\.\d{1,2})?$|^\u0024|\u20AC$/,required: true,maxLength: 40})}/>
      </div>
      <div className="formIberian">
        <label>Suplemento de ibéricos</label>
        <input type="text" {...RegisterForm('iberian_supplement', {pattern: /^[0-9]+(?:\.\d{1,2})?$|^\u0024|\u20AC$/, required: true, maxLength:  40})}/>
      </div>
      <div className="formTime">
        <label>Hora</label>
        <input type="text" {...RegisterForm('', {pattern: /^[0-9]+(?:\.\d{1,2})?$|^\u0024|\u20AC$/, required: true, maxLength:  40})}/>
      </div>
      <div className="formDuration">
        <label>Duración</label>
        <input type="text" {...RegisterForm('', {pattern: /^[0-9]+(?:\.\d{1,2})?$|^\u0024|\u20AC$/, required: true, maxLength:  40})}/>
      </div>
      <div className="formCapacity">
        <label>Aforo máximo</label>
        <input type="text" {...RegisterForm('', {pattern: /^[0-9]+(?:\.\d{1,2})?$|^\u0024|\u20AC$/, required: true, maxLength:  40})}/>
      </div>
      <div className="formExtraPeople">
        <label>Pueden asistir más personas a la cata de las que compraron las entradas</label>
        <select id="response" name="response">
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>
      <button type="submit">Enviar</button>
    </form> 
    </div>
  )
}

export default CreateForm