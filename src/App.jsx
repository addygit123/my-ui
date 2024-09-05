
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import PulsarPage from "./pages/projects/pulsar/pulsar";
import PulsarFunctions from './pages/pulsarFunctions';
import React, { useState } from 'react';
import About from './pages/projects/pulsar/about';
import Home from './pages/home';
import  Projects from './pages/projects/projects';
import Classify from './pages/projects/pulsar/Classify';
import Discuss from './pages/projects/pulsar/Discuss';
import Collection from './pages/projects/pulsar/Collection';
import UnderConstruction from './pages/underconstruction';



export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/projects/pulsar" element={<PulsarPage/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
      </Routes>
      
      <Routes>
        <Route path="/projects/pulsar/about" element={<About />} />
        <Route path="/projects/pulsar/classify" element={<Classify />} />
        <Route path="/projects/pulsar/collection" element={<Collection />} />
        <Route path="/projects/pulsar/discuss" element={<Discuss />} />
        <Route path="/about" element={<UnderConstruction/>} />
        <Route path="/talk" element={<UnderConstruction/>} />
        <Route path="/getinvolved" element={<UnderConstruction/>} />
        <Route path="/build" element={<UnderConstruction/>} />
        <Route path="/news" element={<UnderConstruction/>} />
      </Routes>
      <Footer/>
    
    </Router>
  );
}