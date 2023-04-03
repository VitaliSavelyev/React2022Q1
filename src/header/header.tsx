import React from 'react';
import Navigation from './navigation/navigation';
import { useLocation } from 'react-router';
import { listLinks } from '../constants/constant';
import { ILink, LocationParams } from '../interfaces/link.interface';

const Header = () => {
  const location: LocationParams = useLocation();
  return (
    <header
      style={{
        height: 50,
        display: 'flex',
        padding: '20px',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid green',
      }}
    >
      <Navigation />
      <div>{listLinks.find((link: ILink) => link.to === location.pathname)?.link || '404!'}</div>
    </header>
  );
};

export default Header;
