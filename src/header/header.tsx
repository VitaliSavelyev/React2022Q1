import React from 'react';
import Navigation from './navigation/navigation';

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
        </header>
    );
};

export default Header;
