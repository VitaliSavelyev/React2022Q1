import React, { useEffect } from 'react';
import SearchBar from './search/search';
import CardList from './cardList/cardList';
import { createPortal } from 'react-dom';
import ModalCard from './modalCard/modalCard';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../store/homeSlice';
import { AppDispatch, useAppSelector } from '../../store';

const Home = () => {
  const urlValue: string = useAppSelector((state) => state.home.url);
  const errorCards: string = useAppSelector((state) => state.home.errorCards);
  const isPending: boolean = useAppSelector((state) => state.home.isPending);
  const cardIdModal: string | null = useAppSelector((state) => state.home.cardIdModal);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchData(urlValue));
  }, [urlValue, dispatch]);
  return (
    <main data-testid="home">
      <SearchBar />
      <div
        style={{
          display: 'flex',
          padding: '20px',
          gap: '10px',
          flexWrap: 'wrap',
          border: '1px solid red',
        }}
      >
        {errorCards && <div>{errorCards}</div>}
        {isPending && <div>Loading...</div>}
        {!errorCards && !isPending ? <CardList /> : null}
      </div>
      {cardIdModal && createPortal(<ModalCard />, document.body)}
    </main>
  );
};

export default Home;
