import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SelectTypeEvent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 2vw;
  margin-top: 3vh;
  padding: 2vh;
  border: 3px solid #AC946A;
  border-radius: 5px;
  width: 20vw;
  font-size: 1.25vw;




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
  border: 2px solid #AC946A;
  border-radius: 5px;
  background-color: #AC946A;
  color: #fff;
  font-size: 1.25vw;
  cursor: pointer;
}



li :hover {
  cursor: pointer;
}

`;


const TypeFilter = (onTypeChange) => {
  const [selectedType, setSelectedType] = useState('');
  const [eventTypes, setEventTypes] = useState([]);
  

  useEffect(() => {
    const fetchEventTypes = async () => {
      const result = await axios.get('http://localhost:8000/event/cata_types');
      setEventTypes(result.data);
    };

    fetchEventTypes();
  }, []);


  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    if (onTypeChange) {
      onTypeChange(event.target.value);
    }
  };
  
  return (
    <SelectTypeEvent>
      <h1 class="title-select-type-event">Tipo de Cata</h1>
      <ul value={selectedType} onChange={handleTypeChange}>
        
        <button>Todos los tipos</button>
        <button>Vino</button>
        <button>Cerveza</button>
        <button>Vermout</button>
        <button>Cava</button>
        <button>Gin</button>
        <button>Whisky</button>
        <button>Ron</button>
        <button>Tequila</button>
        <button>Brandy</button>
        <button>Cognac</button>
        <button>Otros</button>
        
      </ul>
    </SelectTypeEvent>
  );
};


export default TypeFilter;