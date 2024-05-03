import React from "react";
import { useState, useEffect } from "react";
import Styled from "styled-components";
import axios from "axios";



const CardContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: right;
    margin-left: 15%;
    margin-top: 30%;
    margin-bottom: 40px;
    width: 80%;
    height: 150%;
    border: 10px solid #000;
    border-radius: 10px;
    background-color: #AC946A;
    

    .card-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        list-style: none;
        padding: 0;
    }

    .card-bg {
        background-color: #f5f5f5;
        border: 1px solid #000;


`;

function Card() {
    const [count, setCount] = useState(1);

    const [events, setEvents] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:8000/event');

        setEvents(result.data);

    };
       
        fetchData();
      }, []);
      
    
      return (
        <>
        <CardContainer>
          <ul className="card-list">
            {events.map((event) => (
              <li key={event.id} className="card-list-item">
                <section className="card-bg">
                    <img src={event.img} alt={event.name} width="50" height="50" />
                    <span>{event.name}</span>
                    <span>{event.price}</span>
                
                    <article className="card-counter">
                        <button className="add-cart" onClick={() => setCount((count) => count + 1)}>+</button>
                        <div className="card-qty">{count}</div>
                        <button className="add-cart" onClick={() => setCount((count) => count - 1)}>-</button>
                        <img src="../../src/assets/images/cart.png"/>
                    </article>

                </section>
              </li>
            ))}
          </ul>
        </CardContainer>
        </>
      );
    }
    
    export default Card;


