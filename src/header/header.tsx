import React from 'react';
import Navigation from './navigation/navigation';
import SearchBar from "./search/search";

const Header = () => {
    return (
        <header style={{
            height: 50,
            display: 'flex',
            padding: '20px',
            justifyContent: 'space-between',
            alignItems:'center',
            border: '1px solid green'
        }}>
            <Navigation/>
            <SearchBar/>
        </header>
    );
};

export default Header;
