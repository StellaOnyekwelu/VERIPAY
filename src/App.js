import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
// import Navbar from './components/Navbar';
import SignUp from './components/SignUp'
import Signin from './components/Signin'
import Verification from './components/Verification';

function App() {
  return (
    <Router>
      <>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/verification' element={<Verification/>} />
        </Routes>
      </>
    </Router>
  )
}

export default App

