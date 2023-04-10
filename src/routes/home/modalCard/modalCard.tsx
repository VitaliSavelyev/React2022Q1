import React, { useEffect, useState } from 'react';
import { CharacterInterface } from '../../../interfaces/character.interface';

const ModalCard = (props: {
  cardId: string;
  setShowingModal: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const { cardId, setShowingModal } = props;
  const defaultUrl = `https://rickandmortyapi.com/api/character/${cardId}`;
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState<CharacterInterface | null>(null);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === 'overlay-modal') {
      setShowingModal(null);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      fetch(defaultUrl)
        .then((res) => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 500);
  });
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
          height: '450px',
        }}
      >
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {!error && !isPending && data ? (
          <div>
            <p>{data.name}</p>
            <p>{data.species}</p>
            <p>{data.type}</p>
            <p>{data.gender}</p>
            <div
              style={{
                backgroundImage: `url(
            ${data.image}
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
