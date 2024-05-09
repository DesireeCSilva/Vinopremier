import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getEventById } from '../../services/eventServices.js'
import { getLocationById } from '../../services/locationServices.js';
import '../Detail/Detail.css'





const Detail = () => {
  const { id } = useParams(); 
  const [event, setEvent] = useState(null);
  const [location, setLocation] = useState(null);
  const [buttonTexts, setButtonTexts] = useState({});
  const [eventsCount, setEventsCount] = useState({});

  useEffect(() => {
    const fetchEventById = async () => {
      try {
        const response = await getEventById(id);
        setEvent(response)
        const responseLocation = await getLocationById(response.id_location);
        console.log(responseLocation);
        console.log(responseLocation.address)
        setLocation(responseLocation)
      } catch (error) {
        console.error('Error al cargar los datos del evento:', error);
      }};
      fetchEventById();
    }, [id]);

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
            <label for="add-extra-feature-private">Añadir suplemento de cata privada:(+€{event.private_tasting_supplement})</label>
          </div>

          <div className='page-detail__left__supplement'>
          <input type="checkbox" id="iberian" name="iberian" onChange={handleCheckboxChange} checked={isChecked.iberian}/>
            <label for="add-extra-feature">Añadir suplemento de Ibéricos:(+€{event.iberian_supplement})</label>
          </div>

          <section className="card-counter"> 
          <article className="buttons-counter" >
          <button className="add-cart" onClick={() => handleCountChange(event.id, 1)}>
              <p style={{fontSize: '2vw', justifyContent: 'center'}}>+</p>
            </button>
            <div style={{padding:'18px',border:'2px solid black',fontWeight:'bold', fontSize:'22px'}}>{eventsCount[event.id] || 0}</div>
            <button className="less-cart"  onClick={() => handleCountChange(event.id, -1)}>
              <p style={{fontSize:'2vw', justifyContent:'center'}}>-</p>
            </button>
          </article> 
            <button className="adding-cart" onClick={() => handleClick(event.id)}>
                  {buttonTexts[event.id] || "AÑADIR"}</button>
            <img src="../../src/assets/images/icons/cart.png"/>
          </section>

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

          <div className='page-detail__left__calendar' >
            <p className='page-detail__left__add'>Seleccionar fecha</p>
            
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
                <p className='page-detail__right__iconstext'>{location && location.address}</p> {/*investigar*/}
              </div>
            </div>
          </div>

          <div className='page-detail__right__description'>
            <p dangerouslySetInnerHTML={{ __html: splitTextByRule(event.description) }}></p>
        </div>
      </div>
    </section>
  </article>
    )}
    <article className="page-detail__section02">
      <hr className="page-detail__hr"/>
      <img className="page-detail__opinion" src="/src/assets/images/banners/section03.png" alt="" />
    </article> 
    </>
  
  )
}


export default Detail
