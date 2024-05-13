import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/card/card.jsx';
import CityFilterContainer from '../../components/CityFilter/CityFilter';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import { getAllEvents, getEventsByFilter } from '../../services/eventServices.js';


const Home = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]); 
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await getAllEvents();
        setEvents(eventsData); 
        setFilteredEvents(eventsData);
        console.log(eventsData);
      } catch (error) {
        console.error(error);
        setError('No se pudieron cargar las catas. Por favor, inténtalo de nuevo más tarde.');
      }
    };

    fetchEvents();
  }, []);

  

  return (
    <>
      <div className="home-container">
      <CityFilterContainer/>
      <label htmlFor="filterType">Filtrar por tipo de cata:</label>
        <SearchBar />
        <div className="gallery-items">
          {/* {filteredEvents.map((event) => (
            <Card key={event.id} event={event} onClick={() => navigate(`/filter/${event.id}`)} />
          ))} */}
        </div>
        <Card />
      </div>
    </>
  );
};

export default Home;