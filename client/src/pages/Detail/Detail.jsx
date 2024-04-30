import React from 'react'
import '../Detail/Detail.css'

const Detail = () => {
  return (
    <>
    <div className='page-detail'>
      <p className='page-detail__subtitle'>Inicio / <span>Cata de Vinos Internacionales con degustación de ibéricos en Madrid</span></p></div>
      <h1 className='page-detail__title'>Cata de Vinos Internacionales con degustación de ibéricos en Madrid</h1>

      <section className='page-detail__section01'>
        <div className='page-detail__section01__left'>
          <img className='page-detail__left__image' src="src/assets/images/cards-edited/card-04.png" alt="" />
          <p className='page-detail__left__prize'>95,00€</p>
          <p className='page-detail__left__iva'>IVA INCLUIDO</p>
          <div className='page-detail__left__supplement'>
            <img className='page-detail__left__check' src="src/assets/images/check-icon.png" alt="" />
            <p className='page-detail__left__suptext'>Añadir suplemento de cata privada: 60€</p>
          </div>

          <div className='page-detail__left__supplement'>
            <img className='page-detail__left__check' src="src/assets/images/check-icon.png" alt="" />
            <p className='page-detail__left__suptext'>Añadir suplemento de ibéricos</p>
          </div>

          <div className='page-detail__left__cart'>
            <img className='page-detail__left__counter' src="src/assets/images/counter.png" alt="" />
            <p className='page-detail__left__add'>AÑADIR</p>
            <img src="src/assets/images/cart.png" alt="" />
          </div>

          <div className='page-detail__left__extra'>
              <img className='page-detail__left__extraicon' src="src/assets/images/o-icon.png" alt="" /><p className='page-detail__left__extratext' >Se puede asistir con niños: no</p>
              <img className='page-detail__left__extraicon' src="src/assets/images/o-icon.png" alt="" /><p className='page-detail__left__extratext' >Disponible versión vegana: sí</p>
              <img className='page-detail__left__extraicon' src="src/assets/images/o-icon.png" alt="" /><p className='page-detail__left__extratext' >Disponible en inglés: si, con consulta previa</p>
              <img className='page-detail__left__extraicon' src="src/assets/images/o-icon.png" alt="" /><p className='page-detail__left__extratext' >Se puede asistir con mascotas: no</p>
              <img className='page-detail__left__extraicon' src="src/assets/images/o-icon.png" alt="" /><p className='page-detail__left__extratext' >Pueden asistir más personas a la cata de las que compraron las entradas: no</p>
         </div>

          <div className='page-detail__left__calendar' >
            <p className='page-detail__left__add'>Seleccionar fecha</p>
            <Calendar />
          </div>

        </div>

        <div className='page-detail__right'>
          

        </div>

      </section>
    </>
  )
}

export default Detail