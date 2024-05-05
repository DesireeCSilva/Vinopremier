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
    gap: 1rem;
    overflow: hidden;
    border:none;
    

    }

  .card-img {
    width: 98%;
    height: 50%;
    
  }

  .card-information {
      
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: #AC946A;
    overflow: hidden;
    height: 220px;

  }

  .card-name {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-height: 2em;
    max-height: 5em;
    padding: 5px;
    font-size: 2vw;
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
      justify-content: space-around;
      background-color: #AC946A;
      width: 100%;
      height: 100%;
      margin-bottom: 1vw;
      
      
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
      width: 3vw;
      height: 3vh;
      background-color: #AC946A;
    }

    .card-qty {
      justify-content: center;
      font-size: 2vw;
      font-weight: bold;
      border: 1px solid #000;
      padding: 0.5vw;
    }

    .add-cart, .less-cart {
      border: 1px solid #000;
      align-items: center;
      justify-content: center;
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

            const locationResult = await axios.get('http://localhost:8000/location');
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
            <button className="card-button-edit" a href="">Editar</button>
            <button className="card-button-delete" >Eliminar</button>
            <button className="card-button-add" a href="">Añadir</button>
          </article>
          <img className="card-img" src={event.image} alt={event.name} width="50" height="50" />
          <div className="card-information">
            <article className="card-name">{event.name}</article>
            <article className="card-price">{event.price}€<p className="card-tax">IVA incluido</p></article>
          </div>
          <section className="card-counter"> 
           <article clasName="buttons-counter" style={{ display:'flex', flexDirection:'row' }}>
              <button className="add-cart" style={{width:'2vw' }} onClick={() => setCount((count) => count + 1)}><p style={{fontSize:"2rem", justifyContent:'center'}}>+</p></button>
              <div className="card-qty">{count}</div>
              <button className="less-cart" style={{width:'2vw'}} onClick={() => setCount((count) => count > 0 ? count - 1 : 0)}><p style={{fontSize:"2rem", justifyContent:'center'}}>-</p></button>
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


