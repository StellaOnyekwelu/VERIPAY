import React from 'react'
import Header from './Header'
import { BiBell } from 'react-icons/bi'

function Dashboard() {
  return (
    <section>
      <div className='w-full flex flex-col justify-center items-center dash'>
        <div className='dashell flex flex-col'>
          <div className='dasham'>Header</div>
          <div className='flex justify-between'>
            <div className='flex flex-col heltxt'>
              <h1>Hello!</h1>
              {/* <p className='reham'>Reham Beltagy</p> */}
            </div>
            <div className='bell p-2'>
              <BiBell />
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center dashwhite'>
          <div className='flex flex-col dashmain'>
            <div className='featbox'></div>
        
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard

