import { ICard } from 'interfaces/card.interface';
import React from 'react';

const Card = (props: { card: ICard; key: string }) => {
    const { card } = props;
    return (
        <div style={{
            padding: '20px',
            border: '1px solid orange',
            marginBottom: '16px'
        }}>
            <p>{card.id}</p>
            <p>{card.name}</p>
            <p>{card.surname}</p>
            <p>{card.city}</p>
        </div>
    );
};

export default Card;
