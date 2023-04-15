import React, {useEffect} from 'react';
import { CharacterInterface } from '../../../interfaces/character.interface';
import {useDispatch, useSelector} from "react-redux";
import {defaultUrl, getDataById, getDataByIdError, getDataByIdSuccess, setModalWindow} from "../../../store/homeSlice";

const ModalCard = () => {
    const cardIdModal = useSelector(state => state.home.cardIdModal);
    const cardError = useSelector(state => state.home.cardError);
    const isPendingCard = useSelector(state => state.home.isPendingCard)
    const card = useSelector(state => state.home.card)
  const dispatch = useDispatch();
    useEffect(() => {
        getDataById()
        fetch(defaultUrl + '/' + cardIdModal)

            .then((res) => {
                if (!res.ok) {
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then((data) => {
                dispatch(getDataByIdSuccess({data}))
            })
            .catch((err) => {
                dispatch(getDataByIdError({error: err}))
            });
    },[])

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === 'overlay-modal') {
      dispatch(setModalWindow({cardId: null}))
    }
  };
  return (
    <div
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
                height: '300px',
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
