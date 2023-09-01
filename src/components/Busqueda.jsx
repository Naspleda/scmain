import React, { useState } from 'react';
import axios from 'axios';

const SearchFilterComponent = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`/api/personas/?search=${query}`);
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>

            <ul>
                {results.map(persona => (
                    <li key={persona.id}>
                        {persona.nombre} {persona.apellido} (DNI: {persona.dni})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchFilterComponent;


