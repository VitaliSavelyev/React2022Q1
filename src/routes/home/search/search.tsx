import React, { useState, useEffect } from 'react';
import { useBeforeUnload } from 'react-router-dom';

const SearchBar = (props: {inputValue: string, setInputValue: any}) => {
    const {inputValue, setInputValue} = props;
    const inputValueRef = React.useRef(inputValue);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
   if(event.key === "Enter"){
       const target = event.target as HTMLInputElement
       console.log(target.value)
       setInputValue(target.value)
   }
  }
  return (
    <input
      placeholder="Search Bar"
      autoComplete="off"
      type="search"
      onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {handleKeyDown(event)}}
      defaultValue={inputValue}
      style={{
        margin: '20px',
      }}
    />
  );
};

export default SearchBar;
