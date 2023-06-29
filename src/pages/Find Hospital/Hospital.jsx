import React from 'react'
import Dashboard from '../../components/Dashboard/Dashboard'
import Topbar from '../../components/Dashboard/Sidebar/Topbar/Topbar'
import './Hospital.css'

const Hospital = () => {
  return (
    <div className='dashboard__hospital'>

        <Dashboard/>
        <div>
          <Topbar/>
          <h1>Hospital</h1>
        </div>
          
        
         
            
            </div>
  )
}

export default Hospital