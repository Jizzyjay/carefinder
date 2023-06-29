import React from 'react';
import './Card.css';

interface TestimonialProps {
  id?: number;
  image: string;
  description: string;
  stars: string;
  paragraphs: string
}

const TestimonialCard = (props: TestimonialProps) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">
        {props.description}
      </p>
      <div className="testimonial-stars">
        <img src={props.stars} alt="stars" className="stars-image" />
      </div>
      <div className="testimonial-profile">
       <img src={props.image} alt="profile" className="profile-image" /><p>{props.paragraphs}</p> 
      </div>
    </div>
  );
}

export default TestimonialCard;
