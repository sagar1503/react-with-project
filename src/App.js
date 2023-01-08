import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform'
import React,{ useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AboutUs from './Components/AboutUs';

function App() {

  const [mode, setMode] = useState('light')
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }

  }

  return (
        <>
        <Router>
        <Navbar title='Text Utility' aboutText='About Us' mode={mode} toggleMode={toggleMode}/>
          <Routes>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/" element={<Textform mode={mode}/>}></Route>
          </Routes>  
        </Router>
        </>

  );
}

export default App;
