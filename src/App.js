
import './App.css';
import Home from './Components/Home';
import Register from './Components/Register';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import data from './ContexApi';



import { useState } from 'react';
import ViewData from './Components/ViewData';
import Signin from './Components/Signin';

function App() {
  const [userdata,setUserData]=useState({})
  console.log(userdata)
  
  return (
    <div className="App">
      <data.Provider value={{userdata,setUserData}}>
      <Router>
        <Routes>
          <Route path='/' element ={userdata && userdata._id ? <Home/>:<Signin/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/ViewData' element ={<ViewData/>}/>
        </Routes>
      </Router>

      </data.Provider>
      
    
    </div>
  );
}

export default App;
