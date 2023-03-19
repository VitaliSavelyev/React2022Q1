import React from 'react';

const Navigation = () => {
    return (
        <ul style={{
            display: 'flex',
            padding: '20px',
            width: '150px',
            justifyContent: 'space-around'
        }}>
            <a href="/">
                <li>Home!!!</li>
            </a>
            <a href="/about">
                <li>About!!!</li>
            </a>
        </ul>
    );
};

export default Navigation;
