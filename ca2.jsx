import React from 'react';
import './Pricing.css';

function Pricing() {
  return (
    <div className="pricing-container">
      <div className="card">
        <h3>Single User</h3>
        <p>$149</p>
        <ul>
          <li>500 GB Storage</li>
          <li>1 Granted User</li>
          <li>Send up to 2 GB</li>
        </ul>
        <button>Start Trial</button>
      </div>

      <div className="card">
        <h3>Double User</h3>
        <p>$149</p>
        <ul>
          <li>500 GB Storage</li>
          <li>2 Granted Users</li>
          <li>Send up to 2 GB</li>
        </ul>
        <button>Start Trial</button>
      </div>

      <div className="card">
        <h3>Triple User</h3>
        <p>$149</p>
        <ul>
          <li>500 GB Storage</li>
          <li>3 Granted Users</li>
          <li>Send up to 2 GB</li>
        </ul>
        <button>Start Trial</button>
      </div>
    </div>
  );
}

export default Pricing;
