import React from 'react';

function Header() {
  return (
    <div className="header">
      <div className="section-title">
        <span>|</span> Manage Group Section
      </div>
      <div className="user-info">
        Hi User <a href="#" className="logout-btn">Logout</a>
      </div>
    </div>
  );
}

export default Header;