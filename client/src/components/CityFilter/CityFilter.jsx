import React from 'react'
import styled from 'styled-components'

const CityFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`

const CityFilter = () => {
  return (
    <>
    <CityFilterContainer>
    <div className='name-filter'>
      <h1 className='tittle-filter'>Catas y Eventos en Madrid</h1>
      <img src='../../src/assets/images/cities/madrid.png' alt='Madrid' />

    </div>

    <div className='name-filter'>
      <h1 className='tittle-filter'>Catas y Eventos en Mallorca</h1>
      <img src='../../src/assets/images/cities/mallorca.png' alt='Mallorca' />

    </div>

    <div className='name-filter'>
    <h1 className='tittle-filter'>Catas y Eventos en Zaragoza</h1>
    <img src='../../src/assets/images/cities/zaragoza.png' alt='Zaragoza' />
    </div> 
    </CityFilterContainer>
    </>
  )
}

export default CityFilter