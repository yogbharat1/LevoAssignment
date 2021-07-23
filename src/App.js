import React, { useState, useEffect } from "react";

import './styles/App.scss';

import HeroText from "./component/HeroText";
import Cards from "./component/Cards";
import CardData from "./data/CardData";

const defualtCardToShow = 3;
let holdingCards = [];


const App = () => {
  const [cardsToShow, setCardsToShow] = useState([]);
  const [nextCards, setNextCards] = useState(3);

  const loadCards = (start, end) => {
    const slicedCards = CardData.slice(start, end);
    holdingCards = [...holdingCards, ...slicedCards];
    setCardsToShow(holdingCards);
  };

  useEffect(() => {
    loadCards(0, defualtCardToShow);
  }, []);

  const loadMoreCards = () => {
    loadCards(nextCards, nextCards + defualtCardToShow);
    setNextCards(nextCards + defualtCardToShow);
  };


  return (
    <main className="main-area">
      <HeroText />
      <div className="centered">
        <Cards items={cardsToShow} />
        <button className="load-more-btn" onClick={loadMoreCards}>Load more</button>
      </div>
    </main>
  );
}

export default App;
