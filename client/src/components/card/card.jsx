import { useState, useEffect } from "react";
import Styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { deleteEventByName } from "../../services/eventServices";
import LogoutButton from '../../components/LogoutButton/LogoutButton.jsx';
import LoginButton from '../../components/LoginButton/LoginButton.jsx'
import { useUserContext } from '../../context/UserContext.jsx'
import FilterButtons from '../../components/TypeFilter/TypeFilter.jsx'
import CityFilter from "../CityFilter/CityFilter.jsx";
import PriceFilter from "../PriceFilter/PriceFilter.jsx";


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
    cursor: pointer;
    
  }

  .card-button-edit:hover {
    transition: 0.5s;
    transform: scale(1.4);
  }

  .card-button-delete {
    background-color: #000000;
    color: #AC946A;
    font-size: 1.25vw;
    margin: 1vw;
    cursor: pointer;

  }

  .card-button-delete:hover {
    transition: 0.5s;
    transform: scale(1.4);
  }

  .card-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    gap: 0.75vw;
    list-style: none;
    
  }

  .card-list-item {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-items: center;
    margin: 1vw;
    
  }


  .card-bg {
    display: flex;
   
    flex-direction: column;
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

  .card-counter-card {
    display: flex;
    align-items: center;
    flex-direction: row;
    
    justify-content: space-around;
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

  .login-cart-button {
    background-color: #AC946A;
    color: #00000;
    font-size: 1vw;
    font-weight: bold;
    margin: 0.5vw;
    border: none;
    height: 3vw;
    padding: 0.1vw;
    text-align: center;
  }

  img {
    width: 2vw;
    height: 2vw;
    background-color: #AC946A;
    padding: 0.1vw;
  
  }
  
  .adding-cart {
    background-color: #AC946A;
    color: #00000;
    font-size: 1.25vw;
    font-weight: bold;
    margin: 0.5vw;
    border: none;
    height: 3vw;
    padding: 0.5vw;
    
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
  const [originalEvents, setOriginalEvents] = useState([]);
  const [cityFilter, setCityFilter] = useState([]);
  const { isAuthenticated } = useUserContext();
  const { isUserRole } = useUserContext();
  
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get('http://localhost:8000/event/name');
          
        setEvents(result.data);
        setOriginalEvents(result.data);
        
        const initialCount = {};
        result.data.forEach((id) => {
          initialCount[id] = 1; 
        });
        setEventsCount(initialCount);
      };
  
      fetchData();
    }, []);

    useEffect(() => {
      if (cityFilter && cityFilter.length > 0) {
        const filteredEvents = originalEvents.filter(event => cityFilter.includes(event.id_location));
        setEvents(filteredEvents);
      } else {
        setEvents(originalEvents);
      }
    }, [cityFilter, originalEvents]);

  
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
        setOriginalEvents(originalEvents.filter(event => event.name !== name));
      } catch (error) {
        console.error('Error al eliminar el evento:', error);
      }
    };
    console.log(isAuthenticated)

    const handlePayment = () => {
      try {
        const token = localStorage.getItem('token');
        console.log(token)
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        console.log(decodedToken)
        const idUser = decodedToken.userId;
        console.log(idUser)
        if (idUser) {
          navigate(`/privateArea/payment/${idUser}`);
        } else {
          alert('Usuario no autenticado. Por favor, inicie sesión.');
        }
      } catch (error) {
        console.error('Error al obtener el token. Lo odio', error)
      }
    };
      return (

<>


<CityFilter setCityFilter={setCityFilter}/>
<h1 className="card-list-title" style={{ textAlign: 'center', fontSize:'3vw', fontWeight: 'extra-bold,', paddingTop:'2vw' }}>CATAS Y EVENTOS DE VINOPREMIER</h1>

<div className="filter-buttons" style={{ display:'flex',flexFlow:'column wrap', width:'10vw', padding:'1vw', margin:'0px', position:'absolute'}}>
  <FilterButtons setEvents={setEvents} events={originalEvents}/>
  <PriceFilter setEvents={setEvents} events={originalEvents}/>
  
</div>


<div className="button-list">
  {isAuthenticated ? (
    <>
  <LogoutButton/>,
  {isUserRole && isUserRole === "superadmin" && <button className="card-button-add" style={{ cursor:'pointer', float: 'right', fontFamily: 'Gotham', fontSize: '1rem', color:'#fff', background:'#000', border: 'none', padding:'2%', marginTop: '2rem', height: '4.4rem', cursor: 'pointer', letterSpacing: '0.09em', marginRight:'2.1rem', background:'#AC946A'}} onClick={() => navigate (`/privateArea/create`)}>AÑADIR CATA</button>}
  </>
  ) : (
  <LoginButton />
  )}
</div>


<ul className="card-list">
<CardContainer>
    {events.map((event) => (
      <li key={event.name} className="card-list-item">
        <section className="card-bg" style={{border:'2px solid #AC946'}}>
          <article className="button-controler">
            {isAuthenticated && (
              <>
                {isUserRole && isUserRole === "superadmin" && <button className="card-button-edit" onClick={() => navigate(`/privateArea/edit/${encodeURIComponent(event.name)}`)}>Editar</button>}
                {isUserRole && isUserRole === "superadmin" &&<button className="card-button-delete" onClick={() =>  handleDelete(event.name)} >Eliminar</button>}
              </>
            )}
          </article>
          <img className="card-img" src={event.image} onClick={() => navigate(`detail/${encodeURIComponent(event.name)}`)} alt={event.name} width="50" height="50" />
          <div className="card-information">
            <article className="card-name">{event.name}</article>
            <article className="card-price">{event.price}€<p className="card-tax">IVA incluido (Precio por persona)</p></article>
          </div>
          <section className="card-counter-card"> 
          <article className="buttons-counter" style={{alignItems: 'center', border:'1px solid black', marginBottom:'0'}}>
            
            <button className="less-cart" style={{ width: '2vw', height:'3vh',backgroundColor:'#ffffff', border:'none', borderRight:'1px solid black'}} onClick={() => handleCountChange(event.id, -1)}>
              <p style={{fontSize: '2vw', fontWeight:'300', textAlign:'center'}}>-</p>
            </button>
            <div className="card-qty" style={{fontSize:'2vw',borderBottom:'none', display: 'flex', alignItems: 'center', borderTop:'none' , paddingLeft:'1vw', paddingRight:'1vw'}}>{eventsCount[event.id] || 0}</div>
            <button className="add-cart" style={{width: '2vw', height:'3vh', backgroundColor:'#ffffff', border:'none', borderLeft:'1px solid black'}} onClick={() => handleCountChange(event.id, 1)}>
              <p style={{fontSize:'2vw', fontWeight:'300', textAlign:'center'}}>+</p>
            </button>
          </article> 
          {isAuthenticated ? (
          
          <>
          <button className="adding-cart" onClick={() => handleClick(event.id)}>
                {buttonTexts[event.id] || "AÑADIR"}</button>
          <img src="../../src/assets/images/icons/cart.png" onClick={handlePayment} style={{cursor:'pointer'}}/>
          </>
          
        ) : (

          <button className="login-cart-button" onClick={() => navigate (`/login`)} >INICIA SESIÓN PARA HACER LA RESERVA</button>
          )} 
          
          </section>
        </section>
      </li>
      ))}
  </CardContainer>
</ul>

</>
);
}


export default Card;