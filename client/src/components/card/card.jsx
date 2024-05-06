import React from "react";
import { useState, useEffect } from "react";
import Styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { deleteEvent } from "../../services/eventServices";


const CardContainer = Styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: right;
    margin-left: 20%;
    margin-top: 10%;
    margin-bottom: 3%;
    width: 80%;
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
    background-color: #AC946A;
    width: 17vw;
    gap: 1rem;
    overflow: hidden;
    border:none;
    

    }

  .card-img {
    width: 100%;
    height: auto;
    object-fit: cover;
    
  }

  .card-information {
    min-height: 100px;
    max-height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    background-color: #AC946A;
    overflow: hidden;
    height: 200px;

  }

  .card-name {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-height: 2em;
    max-height: 5em;
    padding: 5px;
    font-size: 1.5vw;
    background-color: #AC946A;
    
  }

  .card-price {
    align-items: center;
    justify-content: center;
    padding: 1px;
    font-size: 3vw;
    background-color: #AC946A;

    }

    .card-tax  {
      font-size: 1vw;
      background-color: #AC946A;
      
    }

    .card-counter {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #AC946A;
      
      height: 100%;
      margin-bottom: 1vw;
      
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
      font-size: 1.75vw;
      font-weight: bold;
      margin: 1vw;
      border: none;
    }

    .adding-cart:hover {
      transition: 0.5s;
      transform: scale(1.4);
    }

`;

function Card({ id }) {
  const navigate = useNavigate();
  const [buttonTexts, setButtonTexts] = useState({});
  const [eventsCount, setEventsCount] = useState({}); 
  const [city, setCity] = useState([]);
  const [events, setEvents] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:8000/event');

        setEvents(result.data);

            const locationResult = await axios.get('http://localhost:8000/location');
        setCity(locationResult.city);

        const initialCount = {};
        result.data.forEach((event) => {
          initialCount[event.id] = 1; 
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

    const handleDelete = async (id) => {
      try {
        await deleteEvent(id);
        setEvents(events.filter(event => event.id !== id));
      } catch (error) {
        console.error('Error al eliminar el evento:', error);
      }
    };
     
    
      return (
        <>

<h1 className="card-list-title" style={{ textAlign: 'center', paddingTop:'2vw' }}>LAS MEJORES CATAS DE {city}</h1>       
<button className="card-button-add" style={{ float: 'right', padding:'1.5vw', margin:'2vw', backgroundColor:'#ffffff',color: '#AC946A',border:'4px solid #AC946A' , fontWeight:'bold', fontSize:'2vw'}} onClick={() => navigate (`/create`)}>Añadir Cata</button>
          
<CardContainer>
   <ul className="card-list">
   
    {events.map((event) => (
      <li key={event.id} className="card-list-item">
        <section className="card-bg">
          <article className="button-controler">
            <button className="card-button-edit" onClick={() => navigate(`edit/${id}`)}>Editar</button>
            <button className="card-button-delete" onClick={() =>  handleDelete(event.id)} >Eliminar</button>
            </article>
          <img className="card-img" src={event.image} alt={event.name} width="50" height="50" />
          <div className="card-information">
            <article className="card-name">{event.name}</article>
            <article className="card-price">{event.price}€<p className="card-tax">IVA incluido</p></article>
          </div>
          <section className="card-counter"> 
          <article className="buttons-counter" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border:'1px solid black' }}>
            <button className="add-cart" style={{ width: '1.5vw',border:'none', borderRight:'1px solid black'}} onClick={() => handleCountChange(event.id, 1)}>
              <p style={{fontSize: '2vw', justifyContent: 'center'}}>+</p>
            </button>
            <div className="card-qty" style={{fontSize:'1.5vw',borderBottom:'none', borderTop:'none' , paddingLeft:'1vw', paddingRight:'1vw',fontWeight:'bold'}}>{eventsCount[event.id] || 0}</div>
            <button className="less-cart" style={{ width: '1.5vw', border:'none', borderLeft:'1px solid black'}} onClick={() => handleCountChange(event.id, -1)}>
              <p style={{fontSize:'2vw', justifyContent:'center'}}>-</p>
            </button>
          </article> 
            <button className="adding-cart" onClick={() => handleClick(event.id)}>
                  {buttonTexts[event.id] || "AÑADIR"}</button>
            <img src="../../src/assets/images/cart.png"/>
          </section>
        </section>
      </li>
      ))}
    </ul>
  </CardContainer>
  </>
  );
}

export default Card;