import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BirdDetails from './pages/birdDetails';
import Hero from './components.jsx/hero';
import './App.css';
import NavBar from './components.jsx/navBar';
import Footer from './components.jsx/footer';
import ErrorBoundary from './components.jsx/errorBoundary';

function App() {
  return (
    <>
      <div>
        <ErrorBoundary>
          <NavBar />
          <Hero />
          <Routes>
            <Route path="/birdDetail" element={<BirdDetails />} />
          </Routes>
          <Footer />
        </ErrorBoundary>

      </div>
    </>
  );
}

export default App; 