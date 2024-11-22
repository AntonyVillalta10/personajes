// src/pages/CharacterPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCharacterDetails } from "../api";

const CharacterPage = () => {
  const { id } = useParams(); // Obtener el ID del personaje desde la URL
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const characterData = await fetchCharacterDetails(id);
      setCharacter(characterData);
    };
    getData();
  }, [id]);

  if (!character) return <p>Cargando...</p>;

  return (
    <div className="character-page">
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p><strong>Especie:</strong> {character.species}</p>
      <p><strong>Estado:</strong> {character.status}</p>
      <p><strong>Género:</strong> {character.gender}</p>
      <p><strong>Ubicación:</strong> {character.location.name}</p>
      <p><strong>Origen:</strong> {character.origin.name}</p>
    </div>
  );
};

export default CharacterPage;
