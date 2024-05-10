import { useState } from 'react';
import { getEventsByFilter } from '../../services/eventServices.js';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredEvents, setFilteredEvents] = useState([]);

    const handleSearch = async (event) => {
        
        setSearchTerm(event.target.value);
        
        try {
            const filteredResults = await getEventsByFilter(searchTerm);
            setFilteredEvents(filteredResults); 
            console.log(filteredResults);
        } catch (error) {
            console.error('Error fetching filtered events:', error);
            setError('No se pudieron cargar los eventos filtrados. Por favor, inténtalo de nuevo más tarde.');
        }
    };
    
    
    return (
        <div className="search-bar">
        <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleSearch}
        />
        </div>
    );
};
export default SearchBar;