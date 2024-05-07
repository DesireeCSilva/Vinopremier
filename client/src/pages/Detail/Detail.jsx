import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getEventById } from '../../services/eventServices.js'
import '../Detail/Detail.css'
import Calendar from '../../components/Calendar/Calendar.jsx'

const Detail = () => {
  const { id } = useParams(); 
  const [event, setEvent] = useState(null)

  useEffect(() => {
    const fetchEventById = async () => {
      try {
        const response = await getEventById(id);
        setEvent(response)
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

    const [buttonTexts, setButtonTexts] = useState({});
    const [eventsCount, setEventsCount] = useState({})

  return (
    <>
    {event && (
    <article className='page-detail'>
      <p className='page-detail__subtitle'>Inicio / <span className='page-detail__subtitlegold'>{event.name}</span></p>
      <h1 className='page-detail__title'>{event.name}</h1>

      <section className='page-detail__section01'>
        <div className='page-detail__section01__left'>
          <img className='page-detail__left__image' src={event.image} alt="cartel del tipo de cata" />
          <p className='page-detail__left__price'>{event.price}</p>
          <p className='page-detail__left__iva'>IVA INCLUIDO</p>
          <div className='page-detail__left__supplement'>
            <img className='page-detail__left__check' src="/src/assets/images/icons/check-icon.png" alt="" />
            <p className='page-detail__left__suptext'>Añadir suplemento de cata privada: {event.private_tasting_supplement}</p>
          </div>

          <div className='page-detail__left__supplement'>
            <img className='page-detail__left__check' src="/src/assets/images/icons/check-icon.png" alt="" />
            <p className='page-detail__left__suptext'>Añadir suplemento de ibéricos{event.iberian_supplement}</p>
          </div>

          <div className="buttons-counter" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border:'1px solid black' }}>
            <button className="add-cart" style={{ width: '1.5vw',border:'none', borderRight:'1px solid black'}} onClick={() => handleCountChange(event.id, 1)}>
              <p style={{fontSize: '2vw', justifyContent: 'center'}}>+</p>
            </button>
            <div className="card-qty" style={{fontSize:'1.5vw',borderBottom:'none', borderTop:'none' , paddingLeft:'1vw', paddingRight:'1vw',fontWeight:'bold'}}>{eventsCount[event.id] || 0}
            </div>
            <button className="less-cart" style={{ width: '1.5vw', border:'none', borderLeft:'1px solid black'}} onClick={() => handleCountChange(event.id, -1)}>
              <p style={{fontSize:'2vw', justifyContent:'center'}}>-</p>
            </button>
          </div> 

          <div className='page-detail__left__extra'>
              <div className='page-detail__left__extracontent'>
                <img src="/src/assets/images/icons/o-icon.png" alt="" />
                <p className='page-detail__left__extratext' >Se puede asistir con niños: no</p>
              </div>
              <div className='page-detail__left__extracontent'>
                <img src="/src/assets/images/icons/o-icon.png" alt="" />
                <p className='page-detail__left__extratext' >Disponible versión vegana: sí</p>
              </div>
              <div className='page-detail__left__extracontent'>
                <img src="/src/assets/images/icons/o-icon.png" alt="" />
                <p className='page-detail__left__extratext' >Disponible en inglés: si, con consulta previa</p>
              </div>
              <div className='page-detail__left__extracontent'>
                <img src="/src/assets/images/icons/o-icon.png" alt="" />
              <p className='page-detail__left__extratext' >Se puede asistir con mascotas: no</p>
              </div>
              <div className='page-detail__left__extracontent'>
                <img className='page-detail__left__extraicon' src="/src/assets/images/icons/o-icon.png" alt="" />
                <p className='page-detail__left__extratext' >Pueden asistir más personas a la cata de las que compraron las entradas: no</p>
              </div>
         </div>

          <div className='page-detail__left__calendar' >
            <p className='page-detail__left__add'>Seleccionar fecha</p>
            <Calendar />
          </div>

        </div>

      <div className='page-detail__section01__right'>
          <div className='page-detail__right__icons'>
            <div className='page-detail__right__iconscolumn'>
              <div className='page-detail__right__iconscontainer'>
                <img className='page-detail__right__iconsimage' src="/src/assets/images/icons/person-icon.png" alt="" />
                <p className='page-detail__right__iconstext'>1 hora 30min</p>
              </div>
              <div className='page-detail__right__iconscontainer'>
                <img className='page-detail__right__iconsimage' src="/src/assets/images/icons/cupsbottle2.png" alt="" />
                <p className='page-detail__right__iconstext'>2 Vinos Blancos, 1 vino rosados, 3 vinos tintos</p>
              </div>
              <div className='page-detail__right__iconscontainer'>
                <img className='page-detail__right__iconsimage' src="/src/assets/images/icons/barrel-icon.png" alt="" />
                <p className='page-detail__right__iconstext'>Suplemento cata privada: 60€</p>
              </div>
              <div className='page-detail__right__iconscontainer'>
                <img className='page-detail__right__iconsimage' src="/src/assets/images/icons/vino.png" alt="" />
                <p className='page-detail__right__iconstext'>Suplemento ibérico: Jamón, Salchichón, Lomo, Cecina, Chorizo</p>
              </div>
              <div className='page-detail__right__iconscontainer'>
                <img className='page-detail__right__iconsimage' src="/src/assets/images/icons/parking.png" alt="" />
                <p className='page-detail__right__iconstext'>Garaje Silvela C/ Francisco Silvela 21, 28028 Madrid</p>
              </div>
            </div>

            <div className='page-detail__right__iconscolumn'>
              <div className='page-detail__right__iconscontainer'>
                <img className='page-detail__right__iconsimage' src="/src/assets/images/icons/boys-icon.png" alt="" />
                <p className='page-detail__right__iconstext'>Aforo (max): 20 personas</p>
              </div>
              <div className='page-detail__right__iconscontainer'>
                <img className='page-detail__right__iconsimage' src="/src/assets/images/icons/hands-icon.png" alt="" />
                <p className='page-detail__right__iconstext'>Accesibilidad: no</p>
              </div>
              <div className='page-detail__right__iconscontainer'>
                <img className='page-detail__right__iconsimage' src="/src/assets/images/icons/room-icon.png" alt="" />
                <p className='page-detail__right__iconstext'>Es posible cenar en el establecimiento: sí</p>
              </div>
              <div className='page-detail__right__iconscontainer'>
                <img className='page-detail__right__iconsimage' src="/src/assets/images/icons/traductor.png" alt="" />
                <p className='page-detail__right__iconstext'>Idioma: inglés y castellano</p>
              </div>
              <div className='page-detail__right__iconscontainer'>
                <img className='page-detail__right__iconsimage' src="/src/assets/images/icons/diana.png" alt="" />
                <p className='page-detail__right__iconstext'>C/Francisco Silvela 25, Madrid</p>
              </div>
            </div>
          </div>

          <div className='page-detail__right__description'>
            <p>En Vinopremier.com, hemos decidido viajar alrededor del mundo y queremos que nos acompañéis en este viaje. 
            Os proponemos compartir con nosotros una agitante cata de vinos internacionales en nuestra tienda Calle Francisco Silvela 25 (Madrid). <br />
            <br />            
            De la mano de nuestros expertos sumilleres viajaréis por todos los continentes del mundo y conoceréis los mejores vinos de cada país. Un viaje que se inicia en nuestras tiendas y termina en un país lejano a Madrid degustando lo mejor de cada vino. Si queréis dar una vuelta por el mundo no dudéis en venir a vernos y disfrutar del mejor viaje de vuestra vida. <br />
            <br />
            Se trata de una cata no profesional, para pasar un rato agradable y divertido, no es necesario tener ningún tipo de conocimiento previo. <br />
            <br />
            La cata de vinos internacionales con degustación de ibéricos en Madrid es una experiencia enológica y gastronómica que combina la diversidad de vinos de diferentes regiones del mundo con la exquisitez de los ibéricos españoles. Durante esta cata, los participantes tendrán la oportunidad de explorar una selección de vinos internacionales de renombre y disfrutar de una variedad de ibéricos de alta calidad. <br />
            <br />
            La cata de vinos internacionales ofrece la posibilidad de descubrir vinos procedentes de distintas partes del mundo, como Francia, Italia, Estados Unidos, Australia, entre otros. Se presentarán diferentes estilos de vinos, desde blancos frescos y afrutados hasta tintos estructurados y complejos. Cada vino ofrecerá sus propios aromas, sabores y características únicas, proporcionando una experiencia de cata enriquecedora. <br />
            <br />
            La degustación de ibéricos españoles complementa a la perfección la cata de vinos internacionales. Los ibéricos, como el jamón ibérico de bellota y los embutidos, son productos emblemáticos de la gastronomía española, reconocidos por su sabor y calidad excepcionales. Durante la degustación, se podrán saborear diferentes cortes de jamón ibérico, embutidos y otras delicias ibéricas, realzando los sabores y creando armonías gastronómicas únicas con los vinos. <br />
            <br />
            Un experto en vinos y gastronomía guiará la cata, brindando información sobre los vinos internacionales seleccionados, sus regiones de origen y los procesos de elaboración. También se proporcionarán consejos sobre cómo apreciar los vinos y cómo maridarlos adecuadamente con los ibéricos, destacando las sinergias entre los sabores y las texturas. <br />
            <br />
            Esta experiencia de cata de vinos internacionales con degustación de ibéricos en Madrid es ideal para los amantes del vino y la gastronomía que desean descubrir nuevas etiquetas y explorar combinaciones de sabores emocionantes. Permite sumergirse en el mundo del vino internacional mientras se disfruta de la elegancia y el sabor único de los ibéricos españoles. <br />
            <br />
            La cata de vinos internacionales con degustación de ibéricos en Madrid es una experiencia sensorial que combina la riqueza de los vinos internacionales con la exquisitez de los ibéricos españoles. Guiados por un experto, los participantes podrán explorar una variedad de vinos internacionales y disfrutar de la combinación perfecta con los ibéricos, creando momentos gastronómicos inolvidables. Es una actividad ideal para aquellos que buscan una experiencia culinaria completa y un viaje por los sabores del mundo en el corazón de Madrid.</p>
          </div>
        </div>
      </section>
      
    </article>
    )}
    <hr className="page-detail__hr"/>
    <img className="page-detail__opinion" src="/src/assets/images/banners/section03.png" alt="" />
      
    </>
  )
}

export default Detail