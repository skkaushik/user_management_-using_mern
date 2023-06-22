import React from 'react'
import './Mainpage.css'

function Mainpage() {
  return (
    <div>
        <div className='navbar'>
           <div className='nav'>
           <a href='/home'>Home</a>
            <a href='/view'>View Data</a>
           </div>

        </div>
        <div className='heading'>
        <h1>
            User Management Using MERN
        </h1>
        </div>
    </div>
  )
}

export default Mainpage