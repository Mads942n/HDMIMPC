import React from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Datapoints from './Pages/Datapoints';
import Testresults from './Pages/Testresults';


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
        <nav>
          <Header />
        </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Datapoints" element={<Datapoints />} />
            <Route path='/Testresults' element={<Testresults />} />
          </Routes>
          </BrowserRouter>
      </div>
      </>
    
  );
}

export default App;
