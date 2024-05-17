import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useParams , Link } from 'react-router-dom';
import { getEventById, getEventByName, getEventByNameAndDate } from '../../services/eventServices.js'
import { getLocationById } from '../../services/locationServices.js';
import '../Detail/Detail.css';
import { useUserContext } from '../../context/UserContext.jsx';
import { useNavigate } from "react-router-dom";
import { postBooking } from '../../services/bookingServices.js';



const Detail = () => {
  const navigate = useNavigate();
  const { name } = useParams(); 
  const [event, setEvent] = useState(null);
  const [location, setLocation] = useState(null);
  const [eventDates, setEventDates] = useState(null);
  const [buttonTexts, setButtonTexts] = useState({});
  const [eventsCount, setEventsCount] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [veganPeople, setVeganPeople] = useState(0);
  const { isAuthenticated } = useUserContext();
  const { isUserRole } = useUserContext();
  const [extraFeaturePrice, setExtraFeaturePrice] = useState({private: 0, iberian: 0})

  useEffect(() => {
  
  const fetchEventById = async () => {
      try {
        const decodedName = decodeURIComponent(name);
        const response = await getEventByName(decodedName);
        const { eventInstance } = response;
        setEvent(eventInstance);
        const { eventDates } = response;
        setEventDates(eventDates);
        const responseLocation = await getLocationById(eventInstance.id_location);
        setLocation(responseLocation)
        
      } catch (error) {
        console.error('Error al cargar los datos del evento:', error);
      }};
      fetchEventById();
    }, [name]);
  const tileContent = ({date, view}) => {
    if (view === 'month') {
      const formattedDate = formatDate(date);
      const isAvailable = eventDates.some(eventDate => eventDate.date === formattedDate);
      return isAvailable ? <div className="green-dot"></div> : null;
    }
    return null;
  };
  const tileDisabled = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = formatDate(date);
      return !eventDates.some(eventDate => eventDate.date === formattedDate);
    }
    return false;
  };

  const onClickDay = async (date) => {
    setSelectedDate(date)
    try {
      const decodedName = decodeURIComponent(name);
      const formattedDate = formatDate(date);
      const eventData = await getEventByNameAndDate(decodedName, formattedDate);
      console.log(eventData);
      setSelectedDate(eventData);
    } catch (error) {
      console.error('Error al obtener el evento por fecha', error)
    }
}
  const formatDate = date => {
    return (`${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`);
  };

  const handleCountChange = (eventId, delta) => {
      setEventsCount((prevCount) => {
        const currentCount = prevCount[eventId] || 0;
        const newCount = currentCount + delta;
        return { ...prevCount, [eventId]: newCount >= 0 ? newCount : 0 };
      });
    };

  const [isChecked, setIsChecked] = useState({
      private: false,
      iberian: false,
      vegan: false,
      english_version: false
    });
    
  const handleCheckboxChange = (event) => {
      const { name, checked } = event.target;
      setIsChecked(prevState => ({ ...prevState, [name]: checked }));

      let price = 0;
      switch (name) {
  case 'private':
    price = checked ? event.private_tasting_supplement : 0;
    break;
  case 'iberian':
    price = checked ? event.iberian_supplement : 0;
    break;
  default:
    break;
  }
    setExtraFeaturePrice(prevState => ({ ...prevState, [name]: price }));

};

const calculateFinalPrice = () => {
  let finalPrice = parseFloat(event.price);
  finalPrice *= eventsCount[event.id];
  if (isChecked.private) finalPrice += parseFloat(event.private_tasting_supplement);
  if (isChecked.iberian) finalPrice += parseFloat(event.iberian_supplement);
  return finalPrice;
}

const handleVeganPeopleChange = (event) => {
  setVeganPeople(event.target.value);
}
    
const splitTextByRule = (text) => {

    const regex = /(\. )/g;
    let match;
    let result = [];
    let lastIndex = 0;

    while ((match = regex.exec(text))!== null) {
      
      result.push(text.slice(lastIndex, match.index));
      result.push(match[2]);
      lastIndex = match.index + match[0].length;
    }

    result.push(text.slice(lastIndex));
    return result.join('<br />');
  };

const handleDateForm = () => {
    navigate(`/privateArea/date/${encodeURIComponent(event.name)}`);
};  

const handleClick = async (id) => {
    setButtonTexts(prevState => ({ ...prevState, [id]: "AÑADIDO" }));

    setTimeout(() => {
      setButtonTexts(prevState => ({ ...prevState, [id]: "AÑADIR" }));
    }, 2000);

    try {
      const token = localStorage.getItem('token');
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const idUser = decodedToken.id;
      console.log(idUser)
      const bookingData = {
        id_user: idUser,
        id_event: selectedDate.id,
        people: eventsCount[event.id],
        vegan_version: isChecked.vegan,
        vegan_people: veganPeople,
        private_tasting_supplement: isChecked.private,
        iberian_supplement: isChecked.iberian,
        final_price: calculateFinalPrice()
      };

      const newBooking = await postBooking(bookingData);
      console.log(newBooking)
      alert('Reserva añadida al carrito.')
    } catch (error) {
      console.error('Error al crear la reserva', error);
      alert('Error al añadir la reserva al carrito.')
    }
    
};

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
    
    {event && (
    <article className='page-detail'>
      <p className='page-detail__subtitle'><Link to="/" className='page-detail__subtitle-link'>Inicio</Link> / <span className='page-detail__subtitlegold'>{event.name}</span></p>
      <h1 className='page-detail__title'>{event.name}</h1>

      <section className='page-detail__section01'>
        <div className='page-detail__section01__left'>
          <img className='page-detail__left__image' src={event.image} alt="cartel del tipo de cata" />
          <p className='page-detail__left__price'>{event.price}€</p>
          <p className='page-detail__left__iva'>IVA INCLUIDO</p>

          
          

          <div className='page-detail__left__supplement-private'>
            <input type="checkbox" id="private" name="private" onChange={handleCheckboxChange} checked={isChecked.private}/>
            <label className='page-detail__left__suptext' for="add-extra-feature-private">Añadir suplemento de cata privada ({event.private_tasting_supplement}€)</label>
          </div>

          <div className='page-detail__left__supplement-private'>
          <input type="checkbox" id="iberian" name="iberian" onChange={handleCheckboxChange} checked={isChecked.iberian}/>
            <label className='page-detail__left__suptext' for="add-extra-feature">Añadir suplemento de Ibéricos ({event.iberian_supplement}€)</label>
          </div>

          {event.english && (
          <div className='page-detail__left__supplement-private'>
            <input type="checkbox" id="english_version" name="english_version" onChange={handleCheckboxChange} checked={isChecked.english_version} />
            <label className='page-detail__left__suptext' htmlFor="vegan">Versión en inglés</label>
          </div>
          )}

          {event.vegan_version && (
            <>
          <div className='page-detail__left__supplement-private'>
                <input type="checkbox" id="vegan" name="vegan" onChange={handleCheckboxChange} checked={isChecked.vegan} />
                <label className='page-detail__left__suptext' htmlFor="vegan">Opción vegana</label>
          </div>
            {isChecked.vegan && (
              
              <div className='page-detail__left__supplement-private'>
                <label className='page-detail__left__suptext' htmlFor="vegan-people">Número de personas veganas</label>
                    <select id="vegan-people" value={veganPeople} onChange={handleVeganPeopleChange}>
                      {[...Array(Math.max(eventsCount[event.id] +1 || 0, 1)).keys()].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
              </div>
            )}
            </>
          )}

          <div className='page-detail__left__calendar' >
            <p className='page-detail__left__calendartext'>Seleccionar fecha</p>
            <Calendar tileContent={tileContent} tileDisabled={tileDisabled} onClickDay={onClickDay}/>
            {selectedDate && (
              <div>
                <p className='page-detail__left__calendartext' style={{fontSize:'1.2rem'}}>
                  Fecha: {selectedDate.date}<br/> Hora: {selectedDate.time}<br/> Plazas disponibles: {selectedDate.avalaible_places}
                </p>
              </div>
            )}
            {isAuthenticated && (
              <>
            {(isUserRole === "admin" || isUserRole === "superadmin") && <button onClick={handleDateForm}>AÑADIR NUEVA FECHA</button>}
            </>
            )}
          </div>
          
          <section className="card-counter"> 
            <article className="buttons-counter" >
            <button className="less-cart"  onClick={() => handleCountChange(event.id, -1)}>
                <p style={{fontFamily:'Gotham', fontSize:'2rem', justifyContent:'center'}}>-</p>
              </button>
              <div style={{fontFamily:'Gotham', padding:'16.5px',border:'3px solid black',fontWeight:'bold', fontSize:'21px'}}>{eventsCount[event.id] || 0}</div>
              <button className="add-cart" onClick={() => handleCountChange(event.id, 1)}>
                <p style={{fontFamily:'Gotham', fontSize: '2rem', justifyContent: 'center'}}>+</p>
              </button>
          </article>
          
          {isAuthenticated ? (
          
            <>
            <button className="adding-cart" onClick={() => handleClick(event.id)}>
                  {buttonTexts[event.id] || "AÑADIR"}</button>
            <img className="img-cart" src="../../src/assets/images/icons/cart.png" onClick={handlePayment} style={{cursor:'pointer'}}/>
            </>
            
          ) : (

              <button className="page-detail_back-button" onClick={() => navigate (`/login`)} >INICIA SESIÓN PARA HACER LA RESERVA</button>
          )} 
          </section>

        </div>

      <div className='page-detail__section01__right'>
          <div className='page-detail__right__icons'>
            <div className='page-detail__right__iconscolumn'>
              <div className='page-detail__right__iconscontainer'>
                <img className='page-detail__right__iconsimage' src="/src/assets/images/icons/person-icon.png" alt="" />
                <p className='page-detail__right__iconstext'>{event.duration}</p>
              </div>
              <div className='page-detail__right__iconscontainer'>
                <img className='page-detail__right__iconsimage' src="/src/assets/images/icons/cupsbottle2.png" alt="" />
                <p className='page-detail__right__iconstext'>{event.products}</p>
              </div>
              <div className='page-detail__right__iconscontainer'>
                <img className='page-detail__right__iconsimage' src="/src/assets/images/icons/barrel-icon.png" alt="" />
                <p className='page-detail__right__iconstext'>Suplemento cata privada: {event.private_tasting_supplement}€</p>
              </div>
              <div className='page-detail__right__iconscontainer'>
                <img className='page-detail__right__iconsimage' src="/src/assets/images/icons/vino.png" alt="" />
                <p className='page-detail__right__iconstext'>Suplemento ibérico - Jamón, Salchichón, Lomo, Cecina, Chorizo: {event.iberian_supplement}€</p>
              </div>
              <div className='page-detail__right__iconscontainer'>
                <img className='page-detail__right__iconsimage' src="/src/assets/images/icons/parking.png" alt="" />
                <p className='page-detail__right__iconstext'>{event.parking}</p>
              </div>
            </div>

            <div className='page-detail__right__iconscolumn'>
              <div className='page-detail__right__iconscontainer'>
                <img className='page-detail__right__iconsimage' src="/src/assets/images/icons/boys-icon.png" alt="" />
                <p className='page-detail__right__iconstext'>Aforo (max): {event.capacity} personas</p>
              </div>
              <div className='page-detail__right__iconscontainer'>
                <img className='page-detail__right__iconsimage' src="/src/assets/images/icons/hands-icon.png" alt="" />
                <p className='page-detail__right__iconstext'>Accesibilidad: {event.accesibility? "Sí" : "No"}</p>
              </div>
              <div className='page-detail__right__iconscontainer'>
                <img className='page-detail__right__iconsimage' src="/src/assets/images/icons/room-icon.png" alt="" />
                <p className='page-detail__right__iconstext'>Es posible cenar en el establecimiento: {event.possibility_dinner? "Sí" : "No"}</p>
              </div>
              <div className='page-detail__right__iconscontainer'>
                <img className='page-detail__right__iconsimage' src="/src/assets/images/icons/traductor.png" alt="" />
                <p className='page-detail__right__iconstext'>Idiomas: a consultar</p>
              </div>
              <div className='page-detail__right__iconscontainer'>
                <img className='page-detail__right__iconsimage' src="/src/assets/images/icons/diana.png" alt="" />
                <p className='page-detail__right__iconstext'>{location && location.address}</p>
              </div>
            </div>
          </div>

          <div className='page-detail__left__extra'>
              <div className='page-detail__left__extracontent'>
                <img src="/src/assets/images/icons/o-icon.png" alt="" style={{background:'#AC946A'}}/>
                <p className='page-detail__left__extratext' >Se puede asistir con niños: {event.kids? "Sí" : "No"}</p>
              </div>
              <div className='page-detail__left__extracontent'>
                <img src="/src/assets/images/icons/o-icon.png" alt="" style={{background:'#AC946A'}} />
                <p className='page-detail__left__extratext' >Disponible versión vegana: {event.vegan_version? "Sí" : "No"}</p>
              </div>
              <div className='page-detail__left__extracontent'>
                <img src="/src/assets/images/icons/o-icon.png" alt="" style={{background:'#AC946A'}} />
                <p className='page-detail__left__extratext' >Disponible en inglés: {event.english? "Sí" : "No"} con consulta previa</p>
              </div>
              <div className='page-detail__left__extracontent'>
                <img src="/src/assets/images/icons/o-icon.png" alt="" style={{background:'#AC946A'}} />
              <p className='page-detail__left__extratext' >Se puede asistir con mascotas: {event.pets? "Sí" : "No"}</p>
              </div>
              <div className='page-detail__left__extracontent'>
                <img src="/src/assets/images/icons/o-icon.png" alt="" style={{background:'#AC946A'}} />
                <p className='page-detail__left__extratext' >Pueden asistir más personas a la cata de las que compraron las entradas: {event.extra_people? "Sí" : "No"}</p>
              </div>
          </div>

          <div className='page-detail__right__description'>
            <p dangerouslySetInnerHTML={{ __html: splitTextByRule(event.description) }}></p>
        </div>

        <Link to="/"><button className='page-detail_back-button'>VOLVER A CATAS Y EVENTOS</button></Link>
      </div>
    </section>
  </article>
    )}
    <article className="page-detail__opinion" >
      <hr className="page-detail__hr"/>
      <img className="page-detail__opinion-image" src="/src/assets/images/banners/section03.png" alt="" />
    </article> 
    </>
);
}

export default Detail
