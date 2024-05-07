import React from 'react'
import Calendar from 'react-calendar'
import { useState, useEffect } from 'react';
import mysql from 'mysql2';
import { getAllEvents,  } from '../../services/eventServices';
import { getAllBookings, postBooking, updateBooking, deleteBooking } from '../../services/bookingServices';
import '../Calendar/customcalendar.css';




const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'mydatabase'
    });

    connection.connect(err => {
      if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
      }

      const query = 'SELECT * FROM events';
      connection.query(query, (err, results) => {
        if (err) {
          console.error('Error fetching events:', err);
          return;
        }

        setEvents(results.map(event => ({
          id: event.id,
          title: event.title,
          start: new Date(event.start),
          end: new Date(event.end)
        })));
      });

      connection.end();
    });
  }, []);

  const handleEventChange = (date, events) => {
    // Implementar lógica para filtrar eventos por fecha
  };

  const addEvent = (event) => {
    // Implementar lógica para guardar el evento en la base de datos MySQL
  };

  const updateEvent = (event) => {
    // Implementar lógica para actualizar el evento en la base de datos MySQL
  };

  const deleteEvent = (id) => {
    // Implementar lógica para eliminar el evento de la base de datos MySQL
  };

  return (
    <>
      
      <Calendar style={{width: '50vw',margin:'30px', display:'flex', backgroundColor: 'black'}}
       onChange={handleEventChange}
       events={events}
      />
      <AddEventButton onClick={addEvent}>Añadir evento</AddEventButton>
    

    </>
  );
};

export default App;