// src/pages/HomePage.js
import React, { useEffect, useState } from "react";
import { fetchCharacters } from "../api";
import CharacterCard from "../components/CharacterCard";

function HomePage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const characterData = await fetchCharacters();
      setCharacters(characterData);
    };
    getData();
  }, []);

  return (
    <div className="home-page">
      <h1>Personajes de Rick y Morty</h1>
      <div className="character-cards">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
