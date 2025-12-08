import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Connect from './components/Connect';
import CourseSchedule from './components/CourseSchedule';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import StickyApplyBar from './components/StickyApplyBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Connect />
      <CourseSchedule />
      <Benefits />
      <Testimonials />
      <Gallery />
      <Footer />
      <StickyApplyBar />
    </div>
  );
}

export default App;

