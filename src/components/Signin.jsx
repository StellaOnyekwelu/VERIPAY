import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Nav';
import Logo1 from '../assets/Logo1.png';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext } from 'react';
import RegContext from '../context/RegContext';
import useSubmit from './Hook/useSubmit';

function Signin() {
  const {submit, response} = useSubmit();
    
    const REGEX_PASSWORD = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  return (
    <section>
      <div className="logmain">
        <Navbar />
        <div className="logbox flex flex-col">
          <div className='hamburger'>Navbar</div>
          <div className='toolbar flex justify-between'>
            <p>arrow</p>
            <h1>Sign In</h1>
          </div>
          <div className='loglogo'>
            <img src={Logo1} alt="" />
          </div>
          <div className='flex flex-col justify-center align-center mt-30'>
            <div className='flex flex-col form'>
            <label className='formtext text-white' htmlFor="email">Email</label>
              <input className='input' type="password" placeholder='Type your email' />
            </div>
            <div className='flex flex-col form'>
              <label className='formtext text-white' htmlFor="fname">Password</label>
              <input className='input' type="password" placeholder='Type your password' />
            </div>
          </div>
          <div>
            <label className='flex flex-row items-center checkbox'>
              <input type='checkbox'/>
              Keep me Logged in
            </label>
            {/* button */}
            <Link to='/' className='started'>
              <button>Sign In</button>
            </Link>

            <div className='flex gap-3 self-center mb-12'> 
              <p className='font-sans font-large '>Don't Have An account?</p>
                <Link to='/signup' className='text font-sans font-medium text-lg'>Sign Up</Link>
            </div>
            <div className='flex justify-center text-center mb-15 or'>
            <p>Or</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Signin
