import React, { useState, useEffect } from 'react';
import { useBeforeUnload } from 'react-router-dom';

const SearchBar = () => {
  const storageValue = localStorage.getItem('inputValue');
  const [inputValue, setInputValue] = useState(storageValue ? JSON.parse(storageValue) : '');
  const inputValueRef = React.useRef(inputValue);
  useEffect(() => {
    inputValueRef.current = inputValue;
  }, [inputValue]);
  useEffect(() => {
    return () => {
      localStorage.setItem('inputValue', JSON.stringify(inputValueRef.current));
    };
  }, []);
  useBeforeUnload(
    React.useCallback(() => {
      localStorage.setItem('inputValue', JSON.stringify(inputValue));
    }, [inputValue])
  );

  return (
    <input
      placeholder="Search Bar"
      autoComplete="off"
      type="search"
      onChange={(event) => setInputValue(event.target.value)}
      value={inputValue}
      style={{
        margin: '20px',
      }}
    />
  );
};

export default SearchBar;
