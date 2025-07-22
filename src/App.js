import React from 'react';
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Contact from './pages/Contact'
import Project from './pages/Project'
import About from './pages/About'
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/contact' element={<Contact/>} ></Route>
      <Route path='project/' element={<Project/>}></Route>
      <Route path='/about' element={<About/>} ></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
