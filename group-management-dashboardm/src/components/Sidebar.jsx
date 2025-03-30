import React from 'react';

function Sidebar({ activeView, navigateTo }) {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>Invoice</h2>
      </div>
      <div className="nav-links">
        <a 
          href="#" 
          className={activeView === 'dashboard' ? 'nav-link active' : 'nav-link'}
          onClick={(e) => {
            e.preventDefault();
            navigateTo('dashboard');
          }}
        >
          Dashboard
        </a>
        <a 
          href="#" 
          className="nav-link active"
          onClick={(e) => {
            e.preventDefault();
            navigateTo('dashboard');
          }}
        >
          Manage Groups
        </a>
        <a href="#" className="nav-link">Manage Chain</a>
        <a href="#" className="nav-link">Manage Brands</a>
        <a href="#" className="nav-link">Manage SubZones</a>
        <a href="#" className="nav-link">Manage Estimate</a>
        <a href="#" className="nav-link">Manage Invoices</a>
      </div>
    </div>
  );
}

export default Sidebar;