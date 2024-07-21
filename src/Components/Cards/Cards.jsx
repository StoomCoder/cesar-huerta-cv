import React from "react";
import cards from "../../common/commons";

function Cards() {
  return (
    <>
      {cards.card.map((card) => (
        <a href={card.url} key={card.id}>
          <img className="hover" src={card.img} alt={card.alt} />
          <h3>{card.name}</h3>
          <p>{card.description}</p>
        </a>
      ))}
    </>
  );
}

export default Cards;
