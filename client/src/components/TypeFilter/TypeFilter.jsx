import { useState, useEffect } from 'react';
import styled from 'styled-components';

const SelectTypeEvent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 2vw;
  margin-top: 3vh;
  padding: 2vh;
 
  border-radius: 5px;
  width: 20vw;
  font-size: 1vw;

h1 {  
  
  font-size: 1.5vw;
  text-align: left;
  margin-bottom: 2vh;
}


ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  width: 100%;
  height: 100%;
  margin-bottom: 1vh;
}

button {
  margin: 1vh;

  padding: 1vh;
  border:none;
  border-radius: 5px;
  
  background-color: #fff;
  font-size: 1.25vw;
  cursor: pointer;
}

button:hover {
  background-color: #AC946A;
  color: #fff;
  transition: background-color 0.3s ease, color 0.3s ease;
}

`;


const FilterButtons = ({setEvents, events}) => {
  const [selectedType, setSelectedType] = useState('all'); // Initial selected state

  
  const onButtonClick = (cata_type) => {
    setSelectedType(cata_type); // Update selected state

    const filteredEvents = cata_type === 'all'
      ? events  // Show all events if "all" is selected
      : events.filter((event) => event.cata_type === cata_type);

    setEvents(filteredEvents);
  };

  return (
  
    <>
    <SelectTypeEvent>
      <h1 className="title-select-type-event">TIPOS DE CATAS</h1>
        <ul className="list-select-type-event">
        
        <button onClick={() => onButtonClick('Vino')}>Vino</button>
        <button onClick={() => onButtonClick('Cerveza')}>Cerveza</button>
        <button onClick={() => onButtonClick('Vermout')}>Vermout</button>
        <button onClick={() => onButtonClick('Cava')}>Cava</button>
        <button onClick={() => onButtonClick('Gin')}>Gin</button>
        <button onClick={() => onButtonClick('Whisky')}>Whisky</button>
        <button onClick={() => onButtonClick('Tequila')}>Tequila</button>
        <button onClick={() => onButtonClick('Otro')}>Otro</button>
        <button onClick={() => onButtonClick('all')} className={selectedType === 'all' ? 'active' : ''}>Todos los tipos</button>
        </ul>
      </SelectTypeEvent>
    </>
  );
}



export default FilterButtons;