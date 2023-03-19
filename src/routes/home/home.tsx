import { ICard } from 'interfaces/card.interface';
import React from 'react';
import Card from "./Card/card";

const cards = [
    { id: '1', name: 'Vitali', surname: 'Savelyev', city: 'Minsk'},
    { id: '2', name: 'Vitali', surname: 'Savelyev', city: 'Minsk'},
    { id: '3', name: 'Vitali', surname: 'Savelyev', city: 'Minsk'},
    { id: '4', name: 'Vitali', surname: 'Savelyev', city: 'Minsk'},
    { id: '5', name: 'Vitali', surname: 'Savelyev', city: 'Minsk'},
    { id: '6', name: 'Vitali', surname: 'Savelyev', city: 'Minsk'}
]

const Home = () => {
    return (
        <main style={{
            display: 'flex',
            padding: '20px',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            border: '1px solid red'
        }}>
            {cards.map((card: ICard) => (
                <Card key={card.id} card={card}/>
            ))}
        </main>
    );
};

export default Home;
