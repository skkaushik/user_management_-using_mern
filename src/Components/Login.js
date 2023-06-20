import React from 'react'
import { useState } from 'react';


function Login() {
    
        const [user, setUser] = useState({
            email: "",
            password: ""
        })
        
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setUser((preve) => {
                return {
                    ...preve,
                    [name]: value
                }
            })
        }
  return (
    <div className='Container'>
        <form>
        <label htmlFor='email'>Email Id</label>
                <input type="email" id="email" name='email' value={user.email} onChange={handleChange} />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name='password' value={user.password} onChange={handleChange} />


            <button className='btn'>Login</button>



        </form>
    </div>
  )
}

export default Login