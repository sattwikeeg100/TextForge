import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { Routes, Route } from "react-router-dom";

function App() {

  const [mode,setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#322862';
      showAlert("Dark mode has been enabled", "success");
/*    setInterval(() => {
        document.title="TextForge is amazing mode!";
      }, 2000);
      setInterval(() => {
        document.title="Install TextForge now.";
      }, 1500); 
*/
    }
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }


  const containerStyle = {
    padding: '20px', 
    boxShadow: '0 10px 10px rgba(0, 0, 0, 0.4)',
    border: '1px solid #ccc',
    borderRadius: '8px' 
  }

  return (
    <>
      <Navbar title="TextForge" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className='container my-3'>
      <Routes>
          <Route exact path="/" element={
          <div className='container' style={containerStyle}>
          <TextForm heading="Try TextForge - word counter, character counter, remove extra spaces" showAlert={showAlert} mode={mode}/>
          </div>
          }/>
          <Route exact path="/About" element={<About mode={mode}/>} />            
      </Routes>
      </div>
    </>
  );
}

export default App;


