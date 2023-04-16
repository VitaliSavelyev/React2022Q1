import React from 'react';
import Card from '../Card/card';
import { CharacterInterface } from '../../../interfaces/character.interface';
import { useDispatch } from 'react-redux';
import { setModalWindow } from '../../../store/homeSlice';
import { useAppSelector } from '../../../store';

const CardList = () => {
  const storeData: CharacterInterface[] = useAppSelector((state) => state.home.cards);
  const dispatch = useDispatch();
  const handleClick = (cardId: string): void => {
    dispatch(setModalWindow({ cardId }));
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
        {storeData.map((card: CharacterInterface) => (
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
