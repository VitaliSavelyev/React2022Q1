import React, {useEffect, useState} from 'react';
import SearchBar from './search/search';
import CardList from "./cardList/cardList";

const Home = () => {
    const storageValue = localStorage.getItem('inputValue');
    const defaultUrl = `https://rickandmortyapi.com/api/character`
    const [inputValue, setInputValue] = useState(storageValue ? JSON.parse(storageValue) : '');
    const [urlValue, setUrlValue] = useState(defaultUrl);
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [data, setData] = useState([])
    useEffect(() => {
        if(inputValue){
            setUrlValue(defaultUrl + `?name=${inputValue}`)
        } else {
            setUrlValue(defaultUrl)
        }
    }, [inputValue]);
    useEffect(() => {
        setIsPending(true);
        setError(null);
        setTimeout(() => {
            fetch(urlValue)
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setIsPending(false);
                    setData(data.results);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted')
                    } else {
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        }, 500);
    }, [urlValue])
  return (
    <main data-testid="home">
      <SearchBar inputValue={inputValue} setInputValue={setInputValue}/>
      <div
        style={{
          display: 'flex',
          padding: '20px',
          gap: '10px',
          flexWrap: 'wrap',
          border: '1px solid red',
        }}
      >
          { error && <div>{ error }</div> }
          { isPending && <div>Loading...</div> }
          {!error && !isPending && data ? <CardList data={data} /> : null}
      </div>
    </main>
  );
};

export default Home;
