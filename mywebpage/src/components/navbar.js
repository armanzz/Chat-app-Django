import React, { useEffect, useState } from 'react';
import './navbar.css';

function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="navbar" style={{ top: `${scrollY}px` }}>
      <h1>Red Market</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  );
}

export default Navbar;