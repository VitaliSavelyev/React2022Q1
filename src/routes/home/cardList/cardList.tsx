import React from 'react';
import Card from '../Card/card';

const CardList = (props: { data: any; setShowingModal: any }) => {
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
        {data.map((card: any) => (
          <div key={Math.random()}>
            <div onClick={() => handleClick(card.id)}>
              <Card key={card.id} card={card} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
