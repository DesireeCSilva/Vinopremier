import Card from '../../components/card/card';
import CityFilterContainer from '../../components/CityFilter/CityFilter';
import PriceFilter from '../../components/PriceFilter/PriceFilter';
import TypeFilter from '../../components/TypeFilter/TypeFilter';
import axios from 'axios';
import React, { useState, useEffect } from 'react';


const Home = () => {
  const [events, setEvents] = useState([]); 
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:8000/event/name');
      setEvents(result.data);
    };

    fetchData();
  }, []);

  const handleTypeChange = (newType) => {
    setSelectedType(newType);
  };

  const filteredEvents = selectedType
    ? events.filter(event => event.type === selectedType)
    : events;

  return (
    <div>
      
      <CityFilterContainer />
      <Card/>
     
      <PriceFilter />
      <TypeFilter />
      <Card/>
        
        
    </div>
  );
};

export default Home;