import { IUser } from "interfaces/user.interface";
import React from "react";
import Card from "./Card/card";
import SearchBar from "../../header/search/search";
import { users } from "../../db/dbusers";

const Home = () => {
  return (
    <main>
      <SearchBar />
      <div
        style={{
          display: "flex",
          padding: "20px",
          gap: "10px",
          flexWrap: "wrap",
          border: "1px solid red",
        }}
      >
        {users.map((card: IUser) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </main>
  );
};

export default Home;
