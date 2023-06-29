// import React from 'react'
// import facebook from '../../Assets/logos_facebook.png'
// import instagram from '../../Assets/skill-icons_instagram.png'
// import Dashboard from '../../compopnents/Dashboard/Dashboard'
// import './Profile.css'
// const Profile = () => {
//   return (
//     <Dashboard>
//     <div className='profile'>
//           <h1>PROFILE DETAILS</h1>
//           <div className="dashboard__input">
//             <h3>Name</h3>
//             <input type="text" placeholder='Enter Name' />
//           </div>
//           <div className="dashboard__input">
//             <h3>Email Address</h3>
//             <input type="text" placeholder='Enter Email' />
//           </div>
//           <div className="dashboard__input">
//             <h3>Address</h3>
//             <input type="text" placeholder='Enter Address' />
//           </div>
        
//         <div className='dashboard__button'>
//           <button>Save</button>
//         </div>
//         <div className="dashboard__socials">
//           <p>Connect to Social Media Accounts</p>
//           <div>
//             <img src={facebook} alt='profile' />
//             <img src={instagram} alt='profile' />
//           </div>
//         </div>
//         </div>
//         </Dashboard>
//   )
// }

// export default Profile

import React from 'react';
import facebook from '../../Assets/logos_facebook.png';
import instagram from '../../Assets/skill-icons_instagram.png';
import Dashboard from '../../components/Dashboard/Dashboard';
import Topbar from '../../components/Dashboard/Sidebar/Topbar/Topbar';
import './Profile.css';

const Profile = () => {
  return (
    <div className='dashboard__profile'>
    <Dashboard />
      <div className='profile'>
        <Topbar/>
        <h1>PROFILE DETAILS</h1>
        <div className="dashboard__input">
          <h3>Name</h3>
          <input type="text" placeholder='Enter Name' />
        </div>
        <div className="dashboard__input">
          <h3>Email Address</h3>
          <input type="text" placeholder='Enter Email' />
        </div>
        <div className="dashboard__input">
          <h3>Address</h3>
          <input type="text" placeholder='Enter Address' />
        </div>
        <div className='dashboard__button'>
          <button>Save</button>
        
        <div className="dashboard__socials">
          <p>Connect to Social Media Accounts</p>
          <div className='dashboard__social-img'>
            <img src={facebook} alt='profile' />
            <img src={instagram} alt='profile' />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
