import { IUser } from "interfaces/user.interface";
import React from "react";
import Card from "./Card/card";
import SearchBar from "../../header/search/search";
import {CountryEnum} from "../../enums/country.enum";
import { GenderEnum } from "../../enums/gender.enum";

const users: IUser[] = [
    {
        id: "1",
        name: "Vitali",
        surname: "Savelyev",
        birthday: "12.12.2012",
        country: CountryEnum.BELARUS,
        married: true,
        gender: GenderEnum.MALE,
        photo: ''
    },
]

const Home = () => {
  return (
    <main>
      <SearchBar />
      <div
        style={{
          display: "flex",
          padding: "20px",
          justifyContent: "space-between",
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
