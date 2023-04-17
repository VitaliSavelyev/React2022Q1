import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../../../store';
import { defaultUrl, fetchDataById, setModalWindow } from '../../../store/homeSlice';
import { CharacterInterface } from '../../../interfaces/character.interface';

const ModalCard = () => {
  const cardIdModal: string | null = useAppSelector((state) => state.home.cardIdModal);
  const cardError: string = useAppSelector((state) => state.home.cardError);
  const isPendingCard: boolean = useAppSelector((state) => state.home.isPendingCard);
  const card: CharacterInterface | null = useAppSelector((state) => state.home.card);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchDataById(defaultUrl + `/${cardIdModal}`));
  }, [dispatch, cardIdModal]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === 'overlay-modal') {
      dispatch(setModalWindow({ cardId: null }));
    }
  };
  return (
    <div
        data-testid="modal"
      id={'overlay-modal'}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        handleClick(e);
      }}
      style={{
        position: 'fixed',
        backgroundColor: 'rgba(205, 214, 219, 0.5)',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
      }}
    >
      <div
        style={{
          padding: '20px',
          backgroundColor: 'white',
          border: '1px solid orange',
          width: '200px',
          height: '480px',
        }}
      >
        {cardError && <div>{cardError}</div>}
        {isPendingCard && <div>Loading...</div>}
        {!cardError && !isPendingCard && card ? (
          <div>
            <p>Name: {card.name}</p>
            <p>Specie: {card.species}</p>
            <p>Type: {card.type}</p>
            <p>Gender: {card.gender}</p>
            <p>Status: {card.status}</p>
            <div
              style={{
                backgroundImage: `url(
            ${card.image}
          )`,
                width: '200px',
                height: '270px',
                borderRadius: '20px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                alignSelf: 'center',
              }}
            ></div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ModalCard;
