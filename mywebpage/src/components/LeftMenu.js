import React, { useState } from 'react';
import './LeftMenu.css';

function LeftMenu() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className={`left-menu ${collapsed ? 'collapsed' : ''}`}>
      <button onClick={() => setCollapsed(!collapsed)} className="menu-button">
        {collapsed ? 'Expand Menu' : 'Collapse Menu'}
      </button>
      {!collapsed && (
        <ul>
          <li><button className="menu-item">Men's Shoes</button></li>
          <li><button className="menu-item">Women's Shoes</button></li>
          <li><button className="menu-item">Kids' Shoes</button></li>
          <li><button className="menu-item">Accessories</button></li>
        </ul>
      )}
    </div>
  );
}

export default LeftMenu;