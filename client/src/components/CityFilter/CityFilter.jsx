
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
    width: 50%;
    height: auto;
    border-radius: 10px;
    cursor: pointer;

  }
`

const CityFilter = () => {
  const [location, setLocations] = useState([]); 
  const handleCityClick = async (city) => {
    try {
      
      const responseLocation = await getLocationById(city);
      console.log(responseLocation);
      setLocations(responseLocation);
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
    <img src='../../src/assets/images/cities/zaragoza.png' alt='Zaragoza' />
    </div> 
    </CityFilterContainer>
  {location.length === 0 && <div>
    {location.map((loc, index) => (
     <li key={event.name} className="card-list-item">
    <section className="card-bg" style={{border:'2px solid #AC946'}}>
      <article className="button-controler">
        <button className="card-button-edit" onClick={() => navigate(`edit/${id}`)}>Editar</button>
        <button className="card-button-delete" onClick={() =>  handleDelete(event.id)} >Eliminar</button>
        </article>
      <img className="card-img" src={event.image} onClick={() => navigate(`Detail/`)} alt={event.name} width="50" height="50" />
      <div className="card-information">
        <article className="card-name">{event.name}</article>
        <article className="card-price">{event.price}€<p className="card-tax">IVA incluido</p></article>
      </div>
      <section className="card-counter"> 
      <article className="buttons-counter" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border:'1px solid black', marginBottom:'0'}}>
        <button className="add-cart" style={{ width: '20px', height:'30px',backgroundColor:'#ffffff', border:'none', borderRight:'1px solid black'}} onClick={() => handleCountChange(event.id, 1)}>
          <p style={{fontSize: '1vw', justifyContent: 'center'}}>+</p>
        </button>
        <div className="card-qty" style={{fontSize:'1vw',borderBottom:'none', borderTop:'none' , paddingLeft:'1vw', paddingRight:'1vw',fontWeight:'bold'}}>{eventsCount[event.id] || 0}</div>
        <button className="less-cart" style={{ width: '20px', height:'30px',backgroundColor:'#ffffff', border:'none', borderLeft:'1px solid black'}} onClick={() => handleCountChange(event.id, -1)}>
          <p style={{fontSize:'1vw', justifyContent:'center'}}>-</p>
        </button>
      </article> 
        <button className="adding-cart" onClick={() => handleClick(event.id)}>
              {buttonTexts[event.id] || "AÑADIR"}</button>
        <img src="../src/assets/images/icons/cart.png" onClick={() => navigate(`Payment/`)}/>
      </section>
    </section>
  </li>
    ))}
  </div>}
    </>
  )
}


export default CityFilter