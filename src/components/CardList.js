import React from 'react';
import Card from './Card';

const CardList = ({friends}) => {
    const cardsArray = friends.map((friend, i) => (
        <Card 
            key={i}
            id={friend.id}
            name={friend.name}
            email={friend.email}
        />
    ));
    return (
        <div>
            {cardsArray}
        </div>
    );
    
}

export default CardList;