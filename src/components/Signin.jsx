import React from 'react'
import { Link } from 'react-router-dom'
import Logo1 from '../assets/Logo1'
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext } from 'react';
import RegContext from '../context/RegContext';
import useSubmit from './Hook/useSubmit';

function Signin() {
  const {submit, response} = useSubmit();
    
    const REGEX_PASSWORD = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  return (
    <div>
      
    </div>
  )
}

export default Signin
