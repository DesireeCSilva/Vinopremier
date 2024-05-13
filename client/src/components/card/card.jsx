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
    width: 17vw;
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
    height: 150px;
    min-height: 100px;
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
    padding:0.25em;
    font-size: 1vw;
    
  }

  .card-price {
    align-items: center;
    justify-content: center;
    padding: 1px;
    font-size: 2.5vw;
    
  }

    .card-tax  {
    font-size: 0.5vw;
    
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
    margin: 1vw;
    border: none;
    height: 3vw;
    
  }

  .adding-cart:hover {
    transition: 0.5s;
    transform: scale(1.4);
    
  }
`;

function Card({id}) {
  const navigate = useNavigate();
  const [buttonTexts, setButtonTexts] = useState({});
  const [eventsCount, setEventsCount] = useState({}); 
  const [city, setCity] = useState([]);
  const [events, setEvents] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:8000/event/name');
            

        setEvents(result.data);

            const locationResult = await axios.get('http://localhost:8000/location');
        setCity(locationResult.city);

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

<h1 className="card-list-title" style={{ textAlign: 'center', paddingTop:'2vw' }}>LAS MEJORES CATAS DE VINOSPREMIER{city}</h1>
<button className="card-button-add" style={{ float: 'right', padding:'1.5vw', margin:'2vw', backgroundColor:'#ffffff',color: '#AC946A',border:'4px solid #AC946A' , fontWeight:'bold', fontSize:'2vw'}} onClick={() => navigate (`/create`)}>Añadir Cata</button>
          
<CardContainer>
  <ul className="card-list">
    {events.map((event) => (
      <li key={event.name} className="card-list-item">
        <section className="card-bg" style={{border:'2px solid #AC946'}}>
          <article className="button-controler">
            <button className="card-button-edit" onClick={() => navigate(`edit/${id}`)}>Editar</button>
            <button className="card-button-delete" onClick={() =>  handleDelete(event.id)} >Eliminar</button>
            </article>
          <img className="card-img" src={event.image} onClick={() => navigate(`detail/${encodeURIComponent(event.name)}`)} alt={event.name} width="50" height="50" />
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
    </ul>
  </CardContainer>
  </>
  );
}

export default Card;