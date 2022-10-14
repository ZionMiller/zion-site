import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import LandingPage from "./LandingPage";
import Projects from "./Projects";
import Blog from './Blog';
import Resume from './Resume';
import Footer from './Footer';
import '../App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/resume' element={<Resume />}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
