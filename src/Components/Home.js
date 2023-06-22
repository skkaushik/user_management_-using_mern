import React, { useContext, useState } from 'react'
import data from '../ContexApi'


const Home = () => {
  const {userdata,setUserData} = useContext(data)
  const user=JSON.parse(localStorage.getItem('user'))
  

  const logout = ()=>{
    setUserData({})
    
  }
  return (
    <div className='container container-home'>
        <h1>User Profile</h1>
        <h2 className="username-home">Welcome {user.firstName} {user.lastName} 👋</h2>
        <h4 className='username-home'>Email : {user.email}</h4>
        <h5>Job Titile : {user.job}</h5>
        <h5>Address : {user.address}</h5>
        <button className='btn' onClick={logout}>Logout</button>
    </div>
  )
}

export default Home