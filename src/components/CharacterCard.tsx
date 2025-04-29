import React from 'react';
import { Character } from '../types/character';

const CharacterCard: React.FC<Character> = ({ name, image, status, species, location }) => {
  let locationName: string;

  if (typeof location === 'string') {
    locationName = location;
  } else if (location && location.name) {
    locationName = location.name;
  } else {
    locationName = 'Desconhecido';
  }

  return (
    <div className="character-card">
      <div className="image-container"> {/* Div para centralizar a imagem */}
        <img src={image} alt={name} className="character-image" />
      </div>
      <div className="character-info">
        <h3>{name}</h3>
        <p>Status: {status}</p>
        <p>Espécie: {species}</p>
        <p>Localização: {locationName}</p>
      </div>
    </div>
  );
};

export default CharacterCard;