import React, {useEffect} from 'react';
import SearchBar from './search/search';
import CardList from './cardList/cardList';
import {createPortal} from 'react-dom';
import ModalCard from './modalCard/modalCard';
import {useDispatch, useSelector} from "react-redux";
import {getData, getDataError, getDataSuccess} from "../../store/homeSlice";

const Home = () => {
    const urlValue = useSelector(state => state.home.url);
    const errorCards = useSelector(state => state.home.errorCards);
    const isPending = useSelector(state => state.home.isPending)
    const data = useSelector(state => state.home.cards)
    const cardIdModal = useSelector(state => state.home.cardIdModal)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getData())
        fetch(urlValue)
            .then((res) => {
                if (!res.ok) {
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then((data) => {
                dispatch(getDataSuccess({data: data.results}))
            })
            .catch((err) => {
                dispatch(getDataError({error: err}))
            });
    }, [urlValue]);
    return (
        <main data-testid="home">
            <SearchBar/>
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
                {!errorCards && !isPending && data ? (
                    <CardList/>
                ) : null}
            </div>
            {cardIdModal &&
                createPortal(
                    <ModalCard/>,
                    document.body
                )}
        </main>
    );
};

export default Home;
