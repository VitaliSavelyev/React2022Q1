import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <ul style={{
            display: 'flex',
            padding: '20px',
            width: '150px',
            justifyContent: 'space-around'
        }}>
            <NavLink  to="/"
                      style={({ isActive }) => {
                          return {
                              color: isActive ? "red" : "black",
                          };
                      }}>
                <li>Home!!!</li>
            </NavLink>
            <NavLink to="/about"
                     style={({ isActive }) => {
                         return {
                             color: isActive ? "red" : "black",
                         };
                     }}>
                <li>About!!!</li>
            </NavLink>
        </ul>
    );
};

export default Navigation;
