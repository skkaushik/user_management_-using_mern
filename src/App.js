
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import data from './ContexApi';


import './Components/style.css';
import { useState } from 'react';

function App() {
  const [userdata,setUserData]=useState({})
  console.log(userdata)
  return (
    <div className="App">
      <data.Provider value={{setUserData}}>
      <Router>
        <Routes>
          <Route path='/' element ={userdata && userdata._id ? <Home/>:<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>

      </data.Provider>
      
    
    </div>
  );
}

export default App;
