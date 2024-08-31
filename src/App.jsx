import { useState } from 'react'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import PulsarPage from "./pages/pulsar";



export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/projects/pulsar" element={<PulsarPage/>}></Route>
      </Routes>
      <Footer/>
    
    </Router>
  );
}