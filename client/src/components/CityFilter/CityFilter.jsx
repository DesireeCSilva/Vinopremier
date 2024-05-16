
import styled from 'styled-components'
import { useState } from 'react'
import { getLocationById } from '../../services/locationServices'


const CityFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;

  .name-filter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
    padding: 20px;
    border: 2px solid #AC946A;
    border-radius: 10px;
    width: 50%;
    background-color: #F7F7F7;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;

  }

  .tittle-filter {
    font-size: 1.5rem;
    color: #AC946A;
    flex:1;
    cursor: pointer;

  }

  img {
    width: 90%;
    height: auto;
    object-fit: cover;
    border: 2px solid #AC946A;
    border-radius: 10px;
    cursor: pointer;

  }
`

const CityFilter = () => {
  const [location, setLocations] = useState([]); 

  const getLocationById = async (city) => {
    try {
      const response = await fetch(`https://localhost:8000/locations/${city}`);
      const data = await response.json();

      // Si data no es un array, conviértelo en un array
      if (!Array.isArray(data)) {
        return [data];
      }

      return data;
    } catch (error) {
      console.error('Hubo un error al obtener los datos:', error);
      // Si hay un error, devuelve un array vacío
      return [];
    }
  }

  const handleCityClick = async (city) => {
    try {
      const responseLocation = await getLocationById(city);
      console.log(responseLocation);

      if (!Array.isArray(responseLocation)) {
        console.error('responseLocation debe ser un array, pero obtuve:', responseLocation);
        setLocations([]);
      } else {
        setLocations(responseLocation);
      }
    } catch (error) {
      console.error('Hubo un error al obtener los datos:', error);
    }
  };


  return (
    <>
    <CityFilterContainer>
    <div className='name-filter' onClick={() => handleCityClick('Madrid')}>
      <h1 className='tittle-filter'>Catas y Eventos en Madrid</h1>
      <img src='../../src/assets/images/cities/madrid.png' alt='Madrid' />

    </div>

    <div className='name-filter' onClick={() => handleCityClick('Palma de Mallorca')}>
      <h1 className='tittle-filter'>Catas y Eventos en Mallorca</h1>
      <img src='../../src/assets/images/cities/mallorca.png' alt='Mallorca' />

    </div>

    <div className='name-filter' onClick={() => handleCityClick('Zaragoza')}>
    <h1 className='tittle-filter'>Catas y Eventos en Zaragoza</h1>
    <img src='../../src/assets/images/cities/zaragoza-noche.jpg' alt='Zaragoza' />
    </div> 
    </CityFilterContainer>
    </>
  );
}

export default CityFilter
