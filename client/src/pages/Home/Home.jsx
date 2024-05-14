import React, { useState, useEffect } from 'react';
import TypeFilter from '../../components/TypeFilter/TypeFilter';
import CityFilter from '../../components/CityFilter/CityFilter';
import PriceFilter from '../../components/PriceFilter/PriceFilter'; 
import Card from '../../components/card/card';
import { getEventByNameArray } from '../../services/eventServices';



const Home = () => {
  const [events, setEvents] = useState([]);
  const [filters, setFilters] = useState({
    cata_type: '',
    city: '',
    price: 'all',
    // cata_type: '',
  });

  useEffect(() => {
    const fetchEvents = async () => {
      const initialEvents = await getEventByNameArray();
      console.log(initialEvents);

      if (Array.isArray(initialEvents)) {
        setEvents(initialEvents);
      } else {
        console.error('getEventByNameArray did not return an array:', initialEvents);
      }
    };

    fetchEvents();
  }, []);

  const handleFilterChange = (filterName, filterValue) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };

  const filterEvents = (events) => {
    return events.filter(event => {
      return (
        (filters.category === '' || event.category === filters.category) //&&
        //(filters.cata_type === '' || event.cata_type === filters.cata_type)
      );
    });
  };

  const filteredEvents = filterEvents(events);

  return (
    
  <>
    <CityFilter onCityChange={(event) => handleFilterChange('city', event.target.value)} />
    <div className="bar-filters" style={{display: "flex", float:"left", marginTop: "275px", flexDirection:"column", "justify-content": "space-between"}}>
      <TypeFilter onTypeChange={(event) => handleFilterChange('category', event.target.value)} />
      <PriceFilter onPriceChange={(event) => handleFilterChange('minPrice', event.target.value)} />
    </div>
    <Card events={filteredEvents} />
  </>
  );
};

export default Home;