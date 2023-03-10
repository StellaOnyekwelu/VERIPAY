import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
// import Navbar from './components/Navbar';
import SignUp from './components/SignUp'
import Signin from './components/Signin'
import Dashboard from './components/Dashboard';
import Registration from './components/Registration';

function App() {
  return (
    <Router>
      <>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/registration' element={<Registration/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </>
    </Router>
  )
}

export default App

