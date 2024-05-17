import React, { useEffect, useState } from 'react';
import '../Payment/Payment.css';
import { getAllBookingsByUser } from '../../services/bookingServices.js';
import { useParams } from 'react-router-dom';

const Payment = () => {
  const { id_user } = useParams();
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {

    const fetchBookingByUser = async () => {
      try {
        const response = await getAllBookingsByUser(id_user);
        setBookingData(response);
      } catch(error) {
        console.error("Error al cargar los datos de la reserva", error);

      }
    };
    fetchBookingByUser();
  }, [id_user]);
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
            <p>21%</p>
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
            <p className='payment-page_right-article-text'>Nombre Cata
            <p>€</p>
            </p>
            
          </div>
        </div>
      </article>
    </section>

    </>
  )
}

export default Payment