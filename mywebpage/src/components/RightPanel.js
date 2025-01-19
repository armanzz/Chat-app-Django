import React from 'react';
import './Rightpanel.css';

function RightPanel() {
  return (
    <div className="right-panel">
      <h3>Special Offers</h3>
      <button className="offer-button">Up to 50% Off</button>
      <button className="offer-button">New Arrivals</button>
      <button className="offer-button">Limited Edition</button>
    </div>
  );
}

export default RightPanel;