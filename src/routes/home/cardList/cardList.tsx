import React from 'react';
import Card from '../Card/card';
import { CharacterInterface } from '../../../interfaces/character.interface';

const CardList = (props: {
  data: CharacterInterface[];
  setShowingModal: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const { data, setShowingModal } = props;
  const handleClick = (cardId: string): void => {
    setShowingModal(cardId);
  };
  return (
    <div>
      <div
        style={{
          display: 'flex',
          padding: '20px',
          gap: '10px',
          flexWrap: 'wrap',
          border: '1px solid red',
        }}
      >
        {data.map((card: CharacterInterface) => (
          <div key={Math.random()}>
            <div onClick={() => handleClick(card.id)}>
              <Card card={card} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
