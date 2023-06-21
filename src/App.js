
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"


import './Components/style.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
