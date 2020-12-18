import React from 'react';
import { useSelector } from 'react-redux';

export const CardsList = () => {
    const cards = useSelector(state => state.cards);

    const renderedCards = cards.map(card => (
        <div key={ card.id }>
            <p >No: { card.number } Expire Date: { card.expireDate } CVC: { card.cvc }</p>
        </div>
    ));

    return (
        <section className="posts-list">
            <h5>Cards</h5>
            { renderedCards }
        </section>
    );
}