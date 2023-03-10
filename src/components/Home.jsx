import React from 'react'
import Logo1 from '../assets/Logo1.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
        <div className='flex flex-col'>
            <div className='flex justify-center items-center w-full firstbox'>
                <div className='flex flex-col firstmain'>
                    {/* <div className="sidebar">Nav</div> */}
                    <div className="firstlogo">
                        <img src={Logo1} alt="" />
                    </div>
                    <div className="flex flex-col items-start p-0 gap-{32px} confirmbox">
                        <div className='text-white mt-5 mb-10 confam'>
                            <h1>Confirm Payment Transfer With Ease</h1>
                        </div>
                        <p className='text-white mb-8'>The easiest way to confirm customer bank transfers instantly. Our mission is to simplify the bank transfer option for businesses and their customers when shopping in Africa.</p>
                        <div className='email'>
                            <input type="email" placeholder='Enter your email...'/>
                        </div>
                        <Link to='/signup' className='started'>
                        <button>Start for Free</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className=' flex justify-center items center secondbox'>
                <div className="secondmain flex flex-col">
                    <div>
                        <h1 className='excel'>Excellent features that we provide for you</h1>
                    </div>
                    <div className='veribox mt-5 flex justify-center'>
                        <p className='veritext'>Veripay is a payment solution that enables cashiers and online shopping carts  to confirm customer bank transfers instantly. simplifying the bank transfer option for businesses and customers of small and medium enterprises. Our mission is to simplify the bank transfer option for businesses and their customers when shopping in Africa and  eliminate waste of time and resolve business issues </p>
                    </div>
                </div>
            </div>

            <div className='thirdbox flex justify-center items-center'>
                <div className='get flex flex-col items-start p-0'>
                    <h1 className='confam text-white'>Get Transactions Quickly In Less Than 2 Minutes</h1>
                    <p className='text-white'>confirm your payment easier and faster without causing a delay in discharging a service or a transaction of business with a customer</p>
                    <Link to='/signup'>
                <button className='text-white gestar p-2'>Get Started</button>
                </Link>
                </div>
                
            </div>
            
            
        </div>
    </section>
  )
}

export default Home

