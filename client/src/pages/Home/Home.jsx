import React, { useState, useEffect } from 'react';
import TypeFilter from '../../components/TypeFilter/TypeFilter';
import CityFilter from '../../components/CityFilter/CityFilter';
import PriceFilter from '../../components/PriceFilter/PriceFilter'; 
import Card from '../../components/card/card';
import {getEventByName } from '../../services/eventServices';
import { getLocationById } from '../../services/locationServices';




const Home = () => {
  const [events, setEvents] = useState([]);
  const [filters, setFilters] = useState({
    cata_type: 'all',
    city: 'all',
    price: 'all',
    
  });
  

  useEffect(() => {
    const fetchEvents = async () => {
      const initialEvents = await getEventByName();
      const eventsWithCity = await Promise.all(initialEvents.map(async event => {
        const location = await getLocationById(event.id.location);
        return { ...event, city: location.city };
      }));
      setEvents(eventsWithCity);
    };
  
    fetchEvents();
  }, []);
  const handleFilterChange = (filterName, filterValue) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };

  const handleCataTypeChange = (event) => {
    handleFilterChange('cata_type', event.target.value);
  };
  
  const handlePriceChange = (event) => {
    handleFilterChange('price', event.target.value);
  };

  const filterEvents = (events) => {
    if (!Array.isArray(events)) {
      return events;
    } else if (events && typeof events === 'object') {
      return Object.values(events);
    } else {
      console.error('API did not return an array or an object:', events);
      return [];
    }
  
    return events.filter(event => {
      return (
        (filters.cata_type === 'all' || event.cata_type === filters.cata_type) &&
        (filters.city === 'all' || event.city === filters.city) &&
        (filters.price === 'all' || Number(event.price) <= Number(filters.price))
      );
    });
  };
  const filteredEvents = filterEvents(events);

  return (
    
  <>
    <CityFilter onCityChange={(event) => handleFilterChange('city', event.target.value)} />
    
    <div className="bar-filters" style={{display: "flex", float:"left", marginTop: "275px", flexDirection:"column", "justify-content": "space-between"}}>
    
    <PriceFilter onPriceChange={(event) => handlePriceChange('price', event.target.value)} />
    <TypeFilter onTypeChange={(event) => handleCataTypeChange(event.target.value)} />
    
    </div>
    <Card events={filteredEvents} />
  </>
  );
};


export default Home;