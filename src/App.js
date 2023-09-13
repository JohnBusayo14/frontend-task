import React from 'react';
import './App.css';
import { Router, Routes, Route } from 'react-router-dom';
import Homepage from './Page/Homepage';
import Secondpage from './Page/Secondpage';
import About from './Page/About';
import Service from './Page/Service';
import PageNotFound from './Page/PageNotFound';
import Navbar from './Components/Navbar';
import Team from './Page/Team';




function App() {
  return (
    <div className=' container'>
      <Navbar/>
 <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service/>} />
      <Route path="/secondpage" element={<Secondpage />} />
      <Route path="/team" element={<Team />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </div>
   
  
    
   
  );
}

export default App;
