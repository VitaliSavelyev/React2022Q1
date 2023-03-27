import {IUser} from "interfaces/user.interface";
import React from "react";

const Card = (props: { card: IUser; key: string }) => {
    const {card} = props;
    return (
        <div
            style={{
                padding: "20px",
                border: "1px solid orange",
                marginBottom: "16px",
            }}
        >
            <p>{card.name}</p>
            <p>{card.surname}</p>
            <p>{card.birthday}</p>
            <p>{card.country}</p>
            <p>{card.married ? 'married' : 'not married'}</p>
            <p>{card.gender}</p>
            <div
                style={{
                    backgroundImage: `url(
            ${card.photo}
          )`,
                    width: '100%',
                    height: '300px',
                    borderRadius: '20px',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    alignSelf: 'center',
                }}
            ></div>
        </div>
    );
};

export default Card;
