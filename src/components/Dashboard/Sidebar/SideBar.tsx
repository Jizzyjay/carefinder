import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
const SideBar = () => {
  return (
    <div className='sidebar__container'>
      <div className="sidebar__header">
      <h4><Link to="/profile">Profile</Link></h4>
      <h4><Link to="/hospitals">Find Hospital</Link></h4>
            <h4><a href="#home">Book An Appointment</a></h4>
            <h4><a href="#home"> Home</a></h4>
            <h4>Search</h4>
            <h4>Libary</h4>
      </div>
        
        <div className='sidebar__links'>
           
           
        </div>
    </div>
  )
}

export default SideBar