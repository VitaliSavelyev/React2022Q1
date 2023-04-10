import React from 'react';

const SearchBar = (props: {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { inputValue, setInputValue } = props;
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      const target = event.target as HTMLInputElement;
      setInputValue(target.value);
    }
  };
  return (
    <input
      placeholder="Search Bar"
      autoComplete="off"
      type="search"
      onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
        handleKeyDown(event);
      }}
      defaultValue={inputValue}
      style={{
        margin: '20px',
      }}
    />
  );
};

export default SearchBar;
