import React from 'react';
import './MainContent.css';

function MainContent() {
  return (
    <div className="main-content">
     
      <div className="product-grid">
        <div className="product-card">
          <img src="/pic1.jpeg" alt="Running Shoes" />
          <h3>Running Shoes</h3>
          <p>Comfortable and stylish running shoes for all terrains.</p>
          <button className="buy-button">Buy Now</button>
        </div>
        <div className="product-card">
          <img src="/pic2.jpg" alt="Casual Sneakers" />
          <h3>Casual Sneakers</h3>
          <p>Trendy sneakers perfect for casual outings.</p>
          <button className="buy-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
