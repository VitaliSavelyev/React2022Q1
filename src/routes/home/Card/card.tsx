import React from 'react';
import { CharacterInterface } from '../../../interfaces/character.interface';

const Card = (props: { card: CharacterInterface }) => {
  const { card } = props;
  return (
    <div>
      <div
        style={{
          padding: '20px',
          border: '1px solid orange',
          marginBottom: '16px',
        }}
      >
        <p>{card.name}</p>
        <p>{card.species}</p>
        <p>{card.gender}</p>
          {card?.birthday && <p>{card.birthday}</p>}
        <div
          style={{
            backgroundImage: `url(
            ${card.image}
          )`,
            width: '200px',
            height: '300px',
            borderRadius: '20px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            alignSelf: 'center',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Card;
