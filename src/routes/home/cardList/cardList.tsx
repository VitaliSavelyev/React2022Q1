import React from "react";
import Card from "../Card/card";

const CardList = ({data}) => {
    return (
        data.map((card: any) => (
            <Card key={card.id} card={card}/>
        ))
    );
}

export default CardList;
