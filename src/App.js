import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);

  // Obtener todos los personajes desde la API
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Personajes de Rick y Morty</h1>
      <div className="characters-container">
        {characters.map((character) => (
          <div className="character-card" key={character.id}>
            <img
              src={character.image}
              alt={character.name}
              className="character-image"
            />
            <h2>{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
