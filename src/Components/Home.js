import React, { useContext } from 'react'
import data from '../ContexApi'


const Home = () => {
  const {userdata,setUserData} =useContext(data)
  console.log(userdata)

  const logout = ()=>{
    setUserData({})
  }
  return (
    <div className='container container-home'>
        <h1>Home page</h1>
        <h2 className="username-home">Hii 👋{userdata} </h2>
        <button className='btn' onClick={logout}>Logout</button>
    </div>
  )
}

export default Home