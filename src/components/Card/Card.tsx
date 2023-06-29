import React from "react";
import "./Card.css";

interface cardProps {
  id?: number;
  image: string;
  description: string;
  title: string;
  alt: string;
}

const Card = (props: cardProps) => {
  return (
      <div className="card">
        <div className="card__container">
          <div className="card__image">
            <img src={props.image} alt={props.alt} />
          </div>
          <div className="card__body">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
  );
};

export default Card;
