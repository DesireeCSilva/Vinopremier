import React, { useEffect, useState } from 'react';
import '../Payment/Payment.css';
import { getAllBookingsByUser, deleteBooking } from '../../services/bookingServices.js';
import { getEventById } from '../../services/eventServices.js';
import { useParams } from 'react-router-dom';

const Payment = () => {
  const { id_user } = useParams();
  const [bookingData, setBookingData] = useState([]);
  const [eventsData, setEventsData] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {

    const fetchBookingByUser = async () => {
      try {
        const response = await getAllBookingsByUser(id_user);
        setBookingData(response);
        calculateTotals(response);
        console.log(response);
      } catch(error) {
        console.error("Error al cargar los datos de la reserva", error);

      }
    };
    fetchBookingByUser();
  }, [id_user]);

  useEffect(() => {
    const fetchEventsData = async() => {
      try {
        const eventsPromises = bookingData.map(async (booking) => {
          const eventResponse = await getEventById(booking.id_event);
          return eventResponse;
        });
        const eventsData = await Promise.all(eventsPromises);
        setEventsData(eventsData);
      } catch (error) {
        console.error("Error al cargar los datos de los eventos", error)
      }
    };

    fetchEventsData();
  }, [bookingData]);

  const calculateTotals = (bookings) => {
    const total = bookings.reduce((acc, booking) => acc + parseFloat(booking.final_price), 0);
    const subtotal = total / 1.21;
    setTotalCost(total.toFixed(2));
    setSubtotal(subtotal.toFixed(2));
  };


  const handleDeleteBooking = async (bookingId) => {
    try {
      await deleteBooking(bookingId);
      const updatedBookings = bookingData.filter(booking => booking.id !== bookingId);
      setBookingData(updatedBookings);
      calculateTotals(updatedBookings);
    } catch (error) {
      console.error("Error al eliminar la reserva", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <section className='payment-page'>
        <article>
        <p className='payment-page_right-title'>RESUMEN DE COMPRA</p>
        
        <div className='payment-page_right-container'>
          <hr className='payment-page_right-hr' />
          <div className='payment-page_right-text'>
            <p>Subtotal impuestos NO incl. </p>
            <p>€{subtotal}</p>
          </div>
          <hr className='payment-page_right-hr' />
          <div className='payment-page_right-text'>
            <p>Impuestos</p>
            <p>21%</p>
          </div>
          <hr className='payment-page_right-hr' />
          <div className='payment-page_right-text02'>
            <p>Total del pedido</p>
            <p>€{totalCost}</p>
          </div>
            <p className='payment-page_right-text'>ARTÍCULOS EN EL CARRITO: {bookingData.length}</p>
            <hr className='payment-page_right-hr' />
            {bookingData.map((booking, index) => (
              <div key={booking.id} className='payment-page_right-article'>
                <img className='payment-page_right-img02' src={eventsData[index]?.image || "/src/assets/images/cards-original/card01.jpg"} alt="Imagen de la cata" />
                <div className='payment-page_right-article-text'>
                  <p>{eventsData[index]?.name || booking.id_event}</p>
                  <p>Precio Final: €{parseFloat(booking.final_price).toFixed(2)}</p>
                  <p>Número de Personas: {booking.people}</p>
                  {booking.vegan_people > 0 && (
                    <p>Personas Veganas: {booking.vegan_people}</p>
                  )}
                  {booking.iberian_supplement > 0 && (
                    <p>Suplemento Ibérico: Sí</p>
                  )}
                  {booking.private_tasting_supplement && (
                    <p>Suplemento de Cata Privada: Sí</p>
                  )}
                </div>
                <button onClick={() => handleDeleteBooking(booking.id)}>Eliminar pedido</button>
              </div>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}

export default Payment