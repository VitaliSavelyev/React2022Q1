import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeInputValue} from "../../../store/homeSlice";

const SearchBar = () => {
    const storeInputValue = useSelector(state => state.home.searchInput);
    const dispatch = useDispatch();
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter') {
            const target = event.target as HTMLInputElement;
            dispatch(changeInputValue({searchValue: target.value}))
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
            defaultValue={storeInputValue}
            style={{
                margin: '20px',
            }}
        />
    );
};

export default SearchBar;
