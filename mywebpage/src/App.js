import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import LeftMenu from './components/LeftMenu';
import MainContent from './components/MainContent';
import RightPanel from './components/RightPanel';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      let scale = 1;
      if (width >= 992 && width <= 1600) scale = 0.9;
      else if (width >= 700 && width < 767) scale = 0.8;
      else if (width >= 600 && width < 700) scale = 0.75;
      else if (width <= 600) scale = 0.5;
      document.body.style.transform = `scale(${scale})`;
      document.body.style.transformOrigin = 'top center';
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <div className="content-wrapper">
        <LeftMenu />
        <MainContent />
        <RightPanel />
      </div>
      <Footer />
    </div>
  );
}

export default App;
