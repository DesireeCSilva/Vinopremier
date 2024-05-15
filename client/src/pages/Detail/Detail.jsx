import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useParams , Link } from 'react-router-dom';
import { getEventById, getEventByName, getEventByNameAndDate } from '../../services/eventServices.js'
import { getLocationById } from '../../services/locationServices.js';
import '../Detail/Detail.css'



const Detail = () => {
  const { name } = useParams(); 
  const [event, setEvent] = useState(null);
  const [location, setLocation] = useState(null);
  const [eventDates, setEventDates] = useState(null);
  const [buttonTexts, setButtonTexts] = useState({});
  const [eventsCount, setEventsCount] = useState({});
  const [selectedDate, setSelectedDate] = useState(null)

  useEffect(() => {
  
  const fetchEventById = async () => {
      try {
        const decodedName = decodeURIComponent(name);
        const response = await getEventByName(decodedName);
        console.log(response)
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

  const handleClick = (id) => {
      setButtonTexts(prevState => ({ ...prevState, [id]: "AÑADIDO" }));
  
      setTimeout(() => {
        setButtonTexts(prevState => ({ ...prevState, [id]: "AÑADIR" }));
      }, 2000);
    };

  const [isChecked, setIsChecked] = useState({
      private: false,
      iberian: false,
    });
    
  const handleCheckboxChange = (event) => {
      const { name, checked } = event.target;
      setIsChecked(prevState => ({ ...prevState, [name]: checked }));

      let price;
      switch (name) {
  case 'private':
    price = checked ? 60 : 0;
    break;
  case 'iberian':
    price = checked ? 25 : 0;
    break;
  default:
    price = 0;
  }
    setExtraFeaturePrice(prevState => ({ ...prevState, [name]: price }));

};
    
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




  return (
    
    <>
    
    {event && (
    <article className='page-detail'>
      <p className='page-detail__subtitle'>Inicio / <span className='page-detail__subtitlegold'>{event.name}</span></p>
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

          <section className="card-counter"> 
          <article className="buttons-counter" >
            <button className="add-cart" onClick={() => handleCountChange(event.id, 1)}>
              <p style={{fontFamily:'Gotham', fontSize: '2rem', justifyContent: 'center'}}>+</p>
            </button>
            <div style={{fontFamily:'Gotham', padding:'16.5px',border:'3px solid black',fontWeight:'bold', fontSize:'21px'}}>{eventsCount[event.id] || 0}</div>
            <button className="less-cart"  onClick={() => handleCountChange(event.id, -1)}>
              <p style={{fontFamily:'Gotham', fontSize:'2rem', justifyContent:'center'}}>-</p>
            </button>
          </article> 
            <button className="adding-cart" onClick={() => handleClick(event.id)}>
                  {buttonTexts[event.id] || "AÑADIR"}</button>
            <img src="../../src/assets/images/icons/cart.png"/>
          </section>



          <div className='page-detail__left__calendar' >
            <p className='page-detail__left__calendartext'>Seleccionar fecha</p>
            <Calendar tileContent={tileContent} tileDisabled={tileDisabled} onClickDay={onClickDay}/>
            {selectedDate && (
              <div>
                 <p>
                  Fecha: {selectedDate.date}, Hora: {selectedDate.time}, Plazas disponibles: {selectedDate.avalaible_places}
                </p>
              </div>
            )}
          </div>

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

        <Link to="/"><button className='page-detail_back-button'>Volver a Catas y Eventos</button></Link>
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
