import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/Faq';
import Directors from './pages/Directors';
import Instructors from './pages/Instructors';
import Register from './pages/Register';
import Events from './pages/Events';
import Donate from './pages/Donate';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/about/faq' element={<Faq />} />
      <Route path='/about/directors' element={<Directors />} />
      <Route path='/about/instructors' element={<Instructors />} />
      <Route path='/register' element={<Register />} />
      <Route path='/events' element={<Events />} />
      <Route path='/donate' element={<Donate />} />
    </Routes>
  );
}