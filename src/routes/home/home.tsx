import React, { useEffect, useState } from 'react';
import SearchBar from './search/search';
import CardList from './cardList/cardList';
import { createPortal } from 'react-dom';
import ModalCard from './modalCard/modalCard';
import { CharacterInterface } from '../../interfaces/character.interface';
const defaultUrl = `https://rickandmortyapi.com/api/character`;
const Home = () => {
  const storageValue = localStorage.getItem('inputValue');
  const [inputValue, setInputValue] = useState(storageValue ? JSON.parse(storageValue) : '');
  const [urlValue, setUrlValue] = useState(defaultUrl);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState<CharacterInterface[]>([]);
  const [isShowingModal, setShowingModal] = useState<null | string>(null);
  useEffect(() => {
    if (inputValue) {
      setUrlValue(defaultUrl + `?name=${inputValue}`);
    } else {
      setUrlValue(defaultUrl);
    }
  }, [inputValue]);
  useEffect(() => {
    setIsPending(true);
    setError(null);
    setTimeout(() => {
      fetch(urlValue)
        .then((res) => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data.results);
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
  }, [urlValue]);
  useEffect(() => {}, [isShowingModal]);
  return (
    <main data-testid="home">
      <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
      <div
        style={{
          display: 'flex',
          padding: '20px',
          gap: '10px',
          flexWrap: 'wrap',
          border: '1px solid red',
        }}
      >
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {!error && !isPending && data ? (
          <CardList data={data} setShowingModal={setShowingModal} />
        ) : null}
      </div>
      {isShowingModal &&
        createPortal(
          <ModalCard cardId={isShowingModal} setShowingModal={setShowingModal} />,
          document.body
        )}
    </main>
  );
};

export default Home;
