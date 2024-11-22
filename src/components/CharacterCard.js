// src/components/CharacterCard.js
import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>{character.species} - {character.status}</p>
      <Link to={`/character/${character.id}`}>Ver detalles</Link>
    </div>
  );
};

export default CharacterCard;
