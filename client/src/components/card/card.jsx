import React from "react";
import { useState, useEffect } from "react";
import Styled from "styled-components";
import axios from "axios";



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

  .card-button-add {
    background-color: #BDBDBD;
    color: #000000;
    font-size: 1.25vw;

  }

  .card-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    gap: 1rem;
    list-style: none;
        
  }

  .card-bg {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    background-color: #AC946A;
    width: 25vw;
    
    overflow: hidden;
    border:none;

    }

  .card-img {
    width: 100%;
    height: 50%;
    
  }

  .card-name {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-height: 2em;
    max-height: 5em;
    padding: 5px;
    background-color: #AC946A;
    
  }

  .card-price {
    
    justify-content: center;
    padding: 1px;
    font-size: 3vw;
    background-color: #AC946A;

    }

    .card-tax  {
      font-size: 1vw;
      background-color: #AC946A;
      
    }

    

    .card-information {
      
      justify-content: center;
      align-items: center;
      gap: 1rem;
      background-color: #AC946A;
      overflow: hidden;
      height: 100%;

    }

    .card-counter {
      display:flex;
      flex-direction: row;
      background-color: #AC946A;
      
    }

    .card-counter button, .card-counter span, .card-counter img{
      
      font-size: 1vw;
      font-weight: bold;
      cursor: pointer;
      flex-direction: row;
      display: flex;
      justify-content: center;
      
      
    }

    .card-counter button:hover {
      
      transition: 0.5s;
      transform: scale(1.4);
    }

    .card-counter span {
      font-size: 2vw;
      font-weight: bold;
      background-color: #AC946A;
    }
    

    .card-counter img {
      width: 2vw;
      height: 2vh;
      background-color: #AC946A;
    }

    .card-qty {
      font-size: 1vw;
      font-weight: bold;
      border: 1px solid #000;
    }

`;

function Card() {
    const [count, setCount] = useState(1);
    const [city, setCity] = useState([]);
    const [events, setEvents] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:8000/event');

        setEvents(result.data);

            const locationResult = await axios('http://localhost:8000/location');
        setCity(locationResult.city);
      
   

    };
       
        fetchData();
      }, []);
      
    
      return (
        <>

<h1 className="card-list-title">LAS MEJORES CATAS DE {city}</h1>       
<CardContainer>
   <ul className="card-list">
    {events.map((event) => (
      <li key={event.id} className="card-list-item">
        <section className="card-bg">
          <article className="button-controler">
            <button className="card-button-edit">Editar</button>
            <button className="card-button-delete">Eliminar</button>
            <button className="card-button-add">Añadir</button>
          </article>
          <img className="card-img" src={event.image} alt={event.name} width="50" height="50" />
          <div className="card-information">
            <article className="card-name">{event.name}</article>
            <article className="card-price">{event.price}€<p className="card-tax">IVA incluido</p></article>
          </div>
          <section className="card-counter">
           <article clasName="buttons-counter">
              <button className="add-cart" onClick={() => setCount((count) => count + 1)}>+</button>
              <div className="card-qty">{count}</div>
              <button className="add-cart" onClick={() => setCount((count) => count - 1)}>-</button>
            </article> 
            <span>AÑADIR</span>
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


