import React from 'react'
import '../Payment/Payment.css'

// const handleCheckboxChange = (event) => {
//   const { name, checked } = event.target;
//   setIsChecked(prevState => ({ ...prevState, [name]: checked }));
// }

const Payment = () => {
  return (
    <>

    <section className='payment-page'>
      <img className='payment-page_img' src="/src/assets/images/banners/payment-left.PNG" alt="" />
      
      <article>
        <p className='payment-page_right-title'>RESUMEN DE COMPRA</p>
        
        <div className='payment-page_right-container'>
          <hr className='payment-page_right-hr' />
          <div className='payment-page_right-text'>
            <p>Subtotal impuestos NO incl. </p>
            <p>€</p>
          </div>
          <hr className='payment-page_right-hr' />
          <div className='payment-page_right-text'>
            <p>Impuestos</p>
            <p>€</p>
          </div>
          <hr className='payment-page_right-hr' />
          <div className='payment-page_right-text02'>
            <p>Total del pedido</p>
            <p>€</p>
          </div>
          <p className='payment-page_right-text'>ARTÍCULOS EN EL CARRITO</p>
          <hr className='payment-page_right-hr' />
          <div className='payment-page_right-article'>
            <img className='payment-page_right-img02' src="/src/assets/images/cards-original/card01.jpg" alt="" />
            <p className='payment-page_right-article-text'>Cata de Iniciación al mundo del vino + Degustación de Ibéricos en Madrid
            <p>29€</p>
            </p>
            
          </div>
        </div>
      </article>
    </section>

    </>
  )
}

export default Payment