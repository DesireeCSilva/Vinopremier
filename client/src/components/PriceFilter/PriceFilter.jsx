import React, { useState, useEffect } from 'react';

const PriceFilter = ({ events, setFilteredEvents }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  useEffect(() => {
    const filteredEvents = events.filter(event => event.price >= minPrice && event.price <= maxPrice);
    setFilteredEvents(filteredEvents);
  }, [minPrice, maxPrice, events]);

  return (
    <div>
      <label htmlFor="minPrice">Precio mínimo:</label>
      <input
        type="number"
        id="minPrice"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />

      <label htmlFor="maxPrice">Precio máximo:</label>
      <input
        type="number"
        id="maxPrice"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
    </div>
  );
};

export default PriceFilter;