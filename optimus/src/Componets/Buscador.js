import React from 'react';
import TEXTOPARABUSCAR from '../TEXTO-PARA-BUSCAR';
import { useState } from "react";


const getFiltredItems = (query, items) => {
    if (!query) {
        return []; // Devuelve una lista vacía si no hay consulta
    }
    return items.filter(song => song.name.toLowerCase().includes(query.toLowerCase()));
}

const Buscador = () => {
    const [query, setQuery] = useState("");
    const { tracks } = TEXTOPARABUSCAR;
    const { items } = tracks;

    const filtredItems = getFiltredItems(query, items);

    return (
        <div>
            <div className='buscador'>
                <input 
                    type="text" 
                    value={query} 
                    onChange={e => setQuery(e.target.value)} 
                    placeholder="Buscar"
                />
                {query && ( // Solo muestra los resultados si hay texto en el input
                    <ul>
                        {filtredItems.map(value => (
                            <h1 key={value.name}>{value.name}</h1>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Buscador;
