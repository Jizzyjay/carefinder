import React from 'react'
import './Book.css'

interface cardProps {
    id?: number;
    title: string;
    description: string;
    image: string;
    paragraph: string;
}

const Book = (props: cardProps) => {
  return (
    <div className='book'>
        <div className='book__image'>
            <img src={props.image} alt="" />
        </div>
        <div className='book__container'>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <p>{props.paragraph}</p>
        </div>
    </div>
  )
}

export default Book