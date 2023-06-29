
import './App.css';

import Intro from './components/Intro/Intro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Authentication/Login/Login';
import SignUp from './components/Authentication/Sign up/SignUp';
// import Dashboard from './components/Dashboard/Dashboard';
import Hospital from './pages/Find Hospital/Hospital';
import Profile from './pages/Profile/Profile';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  
  
  return (
    <>
    <BrowserRouter>
    <div className='App'>
      <Routes>

        <Route path="/login" element={<Login />} />
        
        <Route element={<ProtectedRoute />} >
          <Route path="/" element={<Intro />} />
        </Route>
        <Route path="/signUp" element={<SignUp />} />
        {/* <Route  element={<Dashboard />} > */}
          
{/* <Route path="/dashboard" element={<Dashboard />} /> */}
<Route path="/profile" element={<Profile />} />
<Route path="/hospitals" element={<Hospital />} />

          {/* </Route> */}
      </Routes>
    </div>
    </BrowserRouter>
    </>
    
  
   
  );
}

export default App;
