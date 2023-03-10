import React from 'react';
import Logo1 from '../assets/Logo1.png';
import { Link } from 'react-router-dom';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext } from 'react';
import RegContext from '../context/RegContext';
import useSubmit from './Hook/useSubmit';

function SignUp() {
    // const {hide, handlePassword} = useContext(RegContext);
    const {submit, response} = useSubmit();
    
    const REGEX_PASSWORD = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  return (
   <section>
        <div className='signmain'>
            <div className='signupbox'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex justify-center items-center bluebg'>
                        <div className='flex flex-col justify-center items-center bluemain'>
                            <div className='text-white arrow'>arrow</div>
                            <div className='flex justify-center items-center logo'>
                                <img src={Logo1} alt="" />
                            </div>
                            <h5 className='create'>Create your Account</h5>
                        </div>
                    </div>

                    {/* form */}
                    <div className='flex justify-center align-center whitebg'>
                        <div className='flex flex-col whitemain'>
                            <div className='flex flex-col form'>
                                <label className='formtext' htmlFor="fname">First Name</label>
                                <input className='input' type="text" placeholder='Enter first name' />
                            </div>
                            <div className='flex flex-col form'>
                                <label className='formtext' htmlFor="fname">Last Name</label>
                                <input className='input' type="text" placeholder='Enter last name' />
                            </div>
                            <div className='flex flex-col form'>
                                <label className='formtext' htmlFor="fname">Email</label>
                                <input className='input' type="email" placeholder='Enter email' />
                            </div>
                            <div className='flex flex-col form'>
                                <label className='formtext' htmlFor="fname">Phone Number</label>
                                <input className='input' type="tel" placeholder='Enter phone number' />
                            </div>
                            <div className='flex flex-col form'>
                                <label className='formtext' htmlFor="fname">Password</label>
                                <input className='input' type="password" placeholder='Enter password' />
                                {/* <div onClick={handlePassword} className='w-5 h-5 absolute top-0 right-3 translate-y-12'>{hide ? <FaEyeSlash className='w-5 h-5'/> : <FaEye className='w-5 h-5'/>}</div> */}
                            </div>
                            <div className='flex flex-col form'>
                                <label className='formtext' htmlFor="fname">Confirm Password</label>
                                <input className='input' type="password" placeholder='Enter password' />
                            </div>

                            {/* checkbox */}
                            <label className='flex flex-row items-center checkbox'>
                                <input type='checkbox'/>
                                By signing Up you agree to receive updates and special offers
                            </label>

                            {/* button */}
                            <Link to='/verification' className='started'>
                            <button>Get Started</button>
                            </Link>

                            <div className='flex gap-3 self-center mb-12'> 
                                <p className='font-sans font-large '>Already have an account?</p>
                                <Link to='/signin' className='text font-sans font-medium text-lg'>SignIn</Link>
                            </div>
                            <div className='flex justify-center text-center mb-15 or'>
                                <p>Or</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </section>
  )
}

export default SignUp
