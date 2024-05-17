
import styled from 'styled-components'


const CityFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;


  :hover {
    transform: scale(0.95);
    transition: transform 0.3s ease-in-out;
}


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
    width: 25vw;
    height: 15vw;
    object-fit: cover;
    border: 2px solid #AC946A;
    border-radius: 10px;
    cursor: pointer;

}

`
const CityFilter = ({setEvents, events}) => {

  const onButtonClick = (id_location) => {
          const filteredLocation = events.filter((event) => event.id_location === id_location);
          setEvents(filteredLocation);
        };
      
  return (
    <>
    <CityFilterContainer>

    <button className='name-filter' id_location='2' onClick={() => onButtonClick('2')}>
      <h1 className='tittle-filter'>Catas y Eventos en Mallorca</h1>
      <img src='../../src/assets/images/cities/palma.png' alt='Mallorca' />

    </button>

    <button className='name-filter'id_location='1' onClick={() =>onButtonClick('1')}>
      <h1 className='tittle-filter'>Catas y Eventos en Madrid</h1>
      <img src='../../src/assets/images/cities/madrid.png' alt='Madrid' />

    </button>

    <button className='name-filter' onClick={() => onButtonClick('3')}>
    <h1 className='tittle-filter'>Catas y Eventos en Zaragoza</h1>
    <img src='../../src/assets/images/cities/zaragoza.png' alt='Zaragoza'/>

    </button> 
    </CityFilterContainer>
    </>
  );
};

export default CityFilter
