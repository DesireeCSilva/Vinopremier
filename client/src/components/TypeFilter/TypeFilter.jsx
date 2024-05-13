import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SelectTypeEvent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0;
  padding: 2vh;
  border: 1px solid #AC946A;
  border-radius: 5px;
  width: 15vw;
  font-size: 2vh;
  margin-bottom: 1vh;

  :hover {
    cursor: pointer;
  }

.title-select-type-event { 
  font-size: 2vh;
  margin-bottom: 1vh;
  }

select {
  padding: 1vw;
  margin-bottom: 1;
  border: 1px solid #AC946A;
  border-radius: 5px;
  font-size: 1.75vh;

}

select:hover {
  cursor: pointer;
}


`;




const TypeFilter = () => {
  const [selectedType, setSelectedType] = useState('');
  const [eventTypes, setEventTypes] = useState([]);

  useEffect(() => {
    const fetchEventTypes = async () => {
      const result = await axios.get('http://localhost:8000/event/name');
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
      <select value={selectedType} onChange={handleTypeChange}>
        <option value="">Todos los tipos</option>
        <option value="Vino">Vino</option>
        <option value="Cerveza">Cervezas</option>
        <option value="Vermout">Vermout</option>
        <option value="Cava">Cava</option>
        <option value="Gin">Gin</option>
        <option value="Whisky">Whisky</option>
        <option value="Ron">Ron</option>
        <option value="Tequila">Tequila</option>
        <option value="Brandy">Brandy</option>
        <option value="Cognac">Cognac</option>
        <option value="Otros">Otros</option>
      </select>
    </SelectTypeEvent>
  );
};


export default TypeFilter;