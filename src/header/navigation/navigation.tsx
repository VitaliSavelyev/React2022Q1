import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul
      style={{
        display: "flex",
        padding: "20px",
        width: "150px",
        justifyContent: "space-around",
      }}
    >
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "black",
          };
        }}
      >
        Home!!!
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "black",
          };
        }}
      >
        About!!!
      </NavLink>
        <NavLink
            to="/form"
            style={({ isActive }) => {
                return {
                    color: isActive ? "red" : "black",
                };
            }}
        >
            Form!!!
        </NavLink>
    </ul>
  );
};

export default Navigation;
