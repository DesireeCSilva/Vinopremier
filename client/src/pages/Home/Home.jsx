import  { useState, useEffect } from 'react';
import Card from '../../components/card/card';
import {getEventByName } from '../../services/eventServices';
import { getLocationById } from '../../services/locationServices';




const Home = () => {
  const [events, setEvents] = useState([]);
  

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEventByName();
      setEvents(events);
    };

    fetchEvents();
  }, []);

  return (
    
  <>
    <Card />

  </>
  );
};


export default Home;