import { useState, useEffect } from "react";
import Styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { deleteEventByName } from "../../services/eventServices";
import LogoutButton from '../../components/LogoutButton/LogoutButton.jsx';
import { useUserContext } from '../../context/UserContext.jsx'
import FilterButtons from '../../components/TypeFilter/TypeFilter.jsx'
import CityFilter from "../CityFilter/CityFilter.jsx";





const CardContainer = Styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: right;
    margin-left: 20%;
    margin-top: 10%;
    margin-bottom: 3%;
    width: 75%;
    height: auto;
    font-family: 'Gotham', sans-serif;
    text-align: center;
  
  
  .button-controler   {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'Gotham', sans-serif;
    overflow: hidden;
    flex-wrap: wrap;
    width: 100%;
    cursor: pointer;
    
  }

  .card-button-edit  {
    color: #FFFFFF;
    background-color: #AC946A;
    font-size: 1.25vw;
    margin: 1vw;
    
  }

  .card-button-delete {
    background-color: #000000;
    color: #AC946A;
    font-size: 1.25vw;
    margin: 1vw;

  }

  .card-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    gap: 0.75vw;
    list-style: none;
    
  }

  .card-bg {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    width: 19vw;
    gap: 1rem;
    overflow: hidden;
    border: 2px solid #AC946A;
  
  }

  .card-img {
    width: 90%;
    height: auto;
    object-fit: cover;
    cursor: pointer;
    
  }

  .card-information {
    
    max-height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    overflow: hidden;
    
  }

  .card-name {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    padding:0.1em;
    font-size: 1.2vw;
    
  }

  .card-price {
    align-items: center;
    justify-content: center;
    padding: px;
    font-size: 2vw;
    
  }

    .card-tax  {
    font-size: 0.65vw;
    
  }

  .card-counter {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 0vw;
    bottom: 0;
    background-color: #AC946A;
    width: 100%;
    
  }

  .buttons-counter {
    background-color: #ffffff;
  
  }

  .card-counter button:hover {
    transition: 0.5s;
    transform: scale(0.9);
  
  }

  img {
    width: 2vw;
    height: 2vw;
    background-color: #AC946A;
  
  }
  
  .adding-cart {
    background-color: #AC946A;
    color: #00000;
    font-size: 1.25vw;
    font-weight: bold;
    margin: 0.5vw;
    border: none;
    height: 3vw;
    
  }

  .adding-cart:hover {
    transition: 0.5s;
    transform: scale(1.4);
    
  }
`;

function Card({}) {
  const navigate = useNavigate();
  const [buttonTexts, setButtonTexts] = useState({});
  const [eventsCount, setEventsCount] = useState({}); 
  const [events, setEvents] = useState([]);
  const { isAuthenticated } = useUserContext();
    
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get('http://localhost:8000/event/name');
          
        setEvents(result.data);
        
        const initialCount = {};
        result.data.forEach((id) => {
          initialCount[id] = 1; 
        });
        setEventsCount(initialCount);
      };
  
      fetchData();
    }, []);
  
    const handleCountChange = (eventId, delta) => {
      setEventsCount((prevCount) => {
        const currentCount = prevCount[eventId] || 0;
        const newCount = currentCount + delta;
        return { ...prevCount, [eventId]: newCount >= 0 ? newCount : 0 };
      });
    };

    const handleClick = (id) => {
      setButtonTexts(prevState => ({ ...prevState, [id]: "AÑADIDO" }));
  
      setTimeout(() => {
        setButtonTexts(prevState => ({ ...prevState, [id]: "AÑADIR" }));
      }, 2000);
    };

    const handleDelete = async (name) => {
      try {
        const decodedName = decodeURIComponent(name)
        await deleteEventByName(decodedName);
        setEvents(events.filter(event => event.name !== name));
      } catch (error) {
        console.error('Error al eliminar el evento:', error);
      }
    };
    console.log(isAuthenticated)
      return (

<>

<h1 className="card-list-title" style={{ textAlign: 'left', marginLeft:'25px' ,fontWeight: 'extra-bold,', paddingTop:'2vw' , fontSize:'3vw' , color:'#AC946A' }}>CATAS Y EVENTOS DE VINOPREMIER</h1>
<button className="card-button-login" style={{ cursor: 'pointer', float: 'right', padding:'1.5vw', margin:'2vw', backgroundColor:'#ffffff',color: '#AC946A',border:'4px solid #AC946A' , fontWeight:'bold', fontSize:'2vw'}} onClick={() => navigate (`/login`)} >INICIA SESIÓN</button>
<button className="card-button-add" style={{ cursor: 'pointer', float: 'right', padding:'1.5vw', margin:'2vw', backgroundColor:'#ffffff',color: '#AC946A',border:'4px solid #AC946A' , fontWeight:'bold', fontSize:'2vw'}} onClick={() => navigate (`/privateArea/create`)}>AÑADIR CATA</button>
<LogoutButton/>

<ul className="card-list">
<CardContainer>
    {events.map((event) => (
      <li key={event.name} className="card-list-item">
        <section className="card-bg" style={{border:'2px solid #AC946'}}>
          <article className="button-controler">
            <button className="card-button-edit" onClick={() => navigate(`edit/${encodeURIComponent(event.name)}`)}>Editar</button>
            <button className="card-button-delete" onClick={() =>  handleDelete(event.name)} >Eliminar</button>
            </article>
          <img className="card-img" src={event.image} onClick={() => navigate(`detail/${encodeURIComponent(event.name)}`)} alt={event.name} width="50" height="50" />
          <div className="card-information">
            <article className="card-name">{event.name}</article>
            <article className="card-price">{event.price}€<p className="card-tax">IVA incluido (Precio por persona)</p></article>
          </div>
          <section className="card-counter"> 
          <article className="buttons-counter" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border:'1px solid black', marginBottom:'0'}}>
            <button className="add-cart" style={{ width: '15px', height:'30px',backgroundColor:'#ffffff', border:'none', borderRight:'1px solid black'}} onClick={() => handleCountChange(event.id, 1)}>
              <p style={{fontSize: '1vw', justifyContent: 'center'}}>+</p>
            </button>
            <div className="card-qty" style={{fontSize:'1vw',borderBottom:'none', display: 'flex', alignItems: 'center',  width: '8px', borderTop:'none' , paddingLeft:'1vw', paddingRight:'1vw',fontWeight:'bold'}}>{eventsCount[event.id] || 0}</div>
            <button className="less-cart" style={{ width: '15px', height:'30px',backgroundColor:'#ffffff', border:'none', borderLeft:'1px solid black'}} onClick={() => handleCountChange(event.id, -1)}>
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
  </CardContainer>
</ul>
<FilterButtons setEvents={setEvents} events={events}/>
<CityFilter setEvents={setEvents} events={events}/>
  </>
  );
}

export default Card;