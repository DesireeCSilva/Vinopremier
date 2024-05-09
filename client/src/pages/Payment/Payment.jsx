import React from 'react'
import '../Payment/Payment.css'

const Payment = () => {
  return (
    <section className='payment-page'>
      <img className='payment-page_img' src="/src/assets/images/banners/payment-left.PNG" alt="" />
      
      <div className='payment-page_right-container'>
        <p className='payment-page_right-title'>RESUMEN DE COMPRA</p>
        <hr className='payment-page_right-hr' />
        <p>Subtot</p>

      </div>

    </section>
  )
}

export default Payment