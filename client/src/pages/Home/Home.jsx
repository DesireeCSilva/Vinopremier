import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/card/card.jsx';
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
        // console.error(error);
        setError('No se pudieron cargar las catas. Por favor, inténtalo de nuevo más tarde.');
      }
    };

    fetchEvents();
  }, []);

  const handleSearch = (searchTerm) => {
    try {
      const filteredResults = getEventsByFilter(searchTerm);
      setFilteredEvents(filteredResults); 
      console.log(filteredResults);
    } catch (error) {
      console.error('Error fetching filtered events:', error);
      setError('No se pudieron cargar los eventos filtrados. Por favor, inténtalo de nuevo más tarde.');
    }
  };



  return (
    <>
      <div className="home-container">
      <label htmlFor="filterType">Filtrar por tipo de cata:</label>
        <SearchBar onSearch={handleSearch} />
        <div className="gallery-items">
          {filteredEvents.map((event) => (
            <Card key={event.id} event={event} onClick={() => navigate(`/filter/${event.id}`)} />
          ))}
        </div>
        {/* <Card /> */}
      </div>
    </>
  );
};

export default Home;