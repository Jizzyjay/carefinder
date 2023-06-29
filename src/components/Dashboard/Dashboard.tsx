// import React from 'react'
// import profile from '../../Assets/Ellipse 19.png'

// import './Dashboard.css'
// import SideBar from './Sidebar/SideBar'
// const Dashboard = () => {
//   return (
//     <div className='dashboard'>
//       <div className='dashboard__container'>
//         <div className='dashboard__logo'>
//           <h1>CareFinder</h1>
//           <SideBar/>
//         </div>
//         <div className="dashboard__input-container">
//           <div className='profile__input'>
//           <input type="text" placeholder='Search hospital' />
//           </div>
       
//         </div>
       
//         <div className='dashboard__img'>
//             <img src={profile} alt="profile" />
//                 </div>
       
//       </div>
//     </div>
//   )
// }

// export default Dashboard

import React from 'react';
import './Dashboard.css';
import SideBar from './Sidebar/SideBar';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard__container'>
        <div className='dashboard__logo'>
          <h1>CareFinder</h1>
          <SideBar />
        </div>
      
        {/* {children}  */}
      </div>
    </div>
  );
};

export default Dashboard;
