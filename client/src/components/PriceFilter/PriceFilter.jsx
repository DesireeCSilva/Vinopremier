import React, { useState } from 'react';
import styled from 'styled-components';

const PriceFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1vh;
  margin-left: 2vw;
  padding: 2vh;
 
  width: 20vw;
  
  font-size: 1vw;
  margin-bottom: 5px;
  
`;

const PriceRangeInput = styled.input`
  type="range"
  min="0"
  max="500"
  step="5"
  padding: 1vw;
  margin-bottom: 1;
  cursor: pointer;
`;

const PriceLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const PriceValue = styled.span`
  font-weight: bold;
`;

const ProductList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProductItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #AC946A;
`;

const ProductName = styled.h3`
  margin-bottom: 5px;
  
`;

const ProductPrice = styled.p`
  font-weight: bold;
  
`;

const PriceFilter = () => {
  const [events, setEvents] = useState([]);
  
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [filteredProducts, setFilteredProducts] = useState([]);




  const handleMaxPriceChange = (event) => {
    const newMaxPrice = parseInt(event.target.value);
    setMaxPrice(newMaxPrice);
    filterProducts();
  };

  const filterProducts = () => {
    const filtered = events.filter((event) => event.price >= minPrice && event.price <= maxPrice);
    setFilteredProducts(filtered);
  };

  return (
    <PriceFilterContainer>
      <h2>PRECIO</h2>
      <PriceRangeInput type="range" min={0} max={500} step={5} value={maxPrice} onChange={handleMaxPriceChange} />
      <PriceLabel style={{fontSize:'1vw'}}>P.máx.</PriceLabel><PriceValue>{maxPrice}</PriceValue>
    </PriceFilterContainer>
  );
};

export default PriceFilter;