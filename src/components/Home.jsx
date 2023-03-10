import React from 'react'
import Logo1 from '../assets/Logo1.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
        <div className='flex flex-col'>
            <div className='flex justify-center items-center w-full firstbox'>
                <div className='flex flex-col firstmain'>
                    <div className="sidebar">Nav</div>
                    <div className="firstlogo">
                        <img src={Logo1} alt="" />
                    </div>
                    <div className="flex flex-col items-start p-0 gap-{32px} confirmbox">
                        <h1>Confirm Payment Transfer With Ease</h1>
                        <p>The easiest way to confirm customer bank transfers instantly. Our mission is to simplify the bank transfer option for businesses and their customers when shopping in Africa</p>
                        <input type="email" placeholder='Enter your email...'/>
                        <Link to='/signup' className='started'>
                        <button>Start for Free</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className=' flex justify-center items center secondbox'>
                <div className="secondmain">
                    
                </div>
            </div>
            <div>1</div>
            <div>2</div>
            <div>1</div>
            <div>2</div>
            <div>1</div>
            <div>2</div>
            
        </div>
    </section>
  )
}

export default Home

