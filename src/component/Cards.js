import React from "react";
import PropTypes from 'prop-types';

const Cards = ({ items }) => {
  return (

    <section className="cards">
      {items.map((card, index) => (
        <article key={index} style={{ backgroundColor: card.bgcolor }} className="card">
          <div className="card-content">
            <span className="card-publish-date">{card.publishdate}</span>
            <h2>{card.title}</h2>
            <p>{card.body}</p>
          </div>
          <div className="card-btn"><button>Read More</button></div>
        </article>
      ))}
    </section>
  );
};

Cards.propTypes = {
  items: PropTypes.any
}


export default Cards;