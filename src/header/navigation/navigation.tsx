import { listLinks } from "../../constants/constant";
import { ILink } from "interfaces/link.interface";
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
      {listLinks.map((link: ILink) => (
        <NavLink
          key={link.to}
          to={link.to}
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "black",
            };
          }}
        >
          {link.link}
        </NavLink>
      ))}
    </ul>
  );
};

export default Navigation;
