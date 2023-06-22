import axios from 'axios';
import React, { useContext } from 'react'
import { useState } from 'react';
import data from '../ContexApi';
import { useNavigate } from 'react-router-dom';
import ViewData from './ViewData';
import './Login.css'





function Signin() {
    
        const [user, setUser] = useState({
            email: "",
            password: ""
        });
        const {setUserData}=useContext(data);
        const navigate = useNavigate();
        
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setUser((preve) => {
                return {
                    ...preve,
                    [name]: value
                }
            })
        }
        const handleSubmit =(e)=>{
            e.preventDefault();
            axios.post("http://localhost:5050/Login",user)
            .then((res) =>{ 
                alert(res.data.message)
                // console.log(res.data.user)
                setUserData(res.data.user)
                navigate("/ ")
            })
        }
  return (
    <div className='Container1'>
        <form>
        <label htmlFor='email'>Email Id</label>
                <input type="email" id="email" name='email' value={user.email} onChange={handleChange} />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name='password' value={user.password} onChange={handleChange} />
                


            {/* <button className='btn' onClick={handlesubmit}>Login</button> */}
            <div className='btn-container'>
                    <button className="btn" onClick={handleSubmit}>Login</button>
                    <button className="btn" onClick={()=>navigate("/register")} >Register</button>
                    <button className="btn" onClick={()=>navigate("/ViewData")} >ViewData</button>
                    
                </div>



        </form>
        {/* <ViewData/> */}
       
    </div>
  )
}

export default Signin