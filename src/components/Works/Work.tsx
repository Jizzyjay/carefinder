import React from 'react'
import './work.css'
import eclipse from '../../Assets/Ellipse 9.png'
import eclipse2 from '../../Assets/Ellipse 10.png'
import eclipse3 from '../../Assets/Ellipse 11.png'
import eclipse4 from '../../Assets/Ellipse 12.png'
import WorkCard from '../WorkCard/WorkCard'
import arrow from "../../Assets/Arrow 1.png"
import arrow2 from "../../Assets/Arrow 2.png"
import arrow3 from "../../Assets/Arrow 3.png"
const Work = () => {
  return (
    <div className='work'>
        
        <div className='work__heading'>
        <h2>How it Works</h2>
        </div>
        
        <div className="work__card">
        <WorkCard
        arrow={arrow}
        image={eclipse}
        title="Find Hospital"
        description='Find the best hospitals and doctors near you, our efficient search engine provides you with the best results.'
        />
        <WorkCard
        
        arrow={arrow2}
        image={eclipse2}
        title="Save or share hospital"
        description='Carefinder allows users to save and share the list of hospitals with others. Users can share the information via email or by generating a shareable link'
        />
        <WorkCard
        arrow={arrow3}
        image={eclipse3}
        title="Book Appointment"
        description='Book appointments easily by inputting correct details'
        />
        <WorkCard
       arrow=''
        image={eclipse4}
        title="Make a visit"
        description='Appointment confirmed, then make a visit to your selected hospital or doctor'
        />
        </div>
    </div>
   
  )
}

export default Work