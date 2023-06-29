import React from 'react'
import './Workcard.css'
interface cardProps {
    id?: number;
    image: string;
    title: string;
    description: string;
    arrow: string;
}
const WorkCard = (
    props: cardProps
) => {
  return (
    <div className='work-card'>
        <div className="work-card__image">
            <img src={props.image} alt="Eclipse" />
          {/* <img src={props.arrow} alt="" /> */}
           <div>
            
           </div>
        </div>
        <div className="work-card__body">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            
        </div>
    </div>
  )
}

export default WorkCard