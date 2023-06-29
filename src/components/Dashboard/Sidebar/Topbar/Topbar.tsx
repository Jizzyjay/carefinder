import React from 'react'
import profile from '../../../../Assets/Ellipse 19.png';
import './Topbar.css'
const Topbar = () => {
  return (
    <nav className="dashboard__input-container">
          <div className='profile__input'>
            <input type="text" placeholder='Search hospital' />
          </div>
        <div className='dashboard__img'>
          <img src={profile} alt="profile" />
        </div>
    </nav>
  )
}

export default Topbar