import React from 'react';
import '../styles/Features.css';

function Features() {
  return (
    <div className="features">
      <h2>Store Features</h2>
      <ul>
        <li>
          <strong>Instant Search:</strong> Find books dynamically.
        </li>
        <li>
          <strong>Live Shopping Cart:</strong> Add books seamlessly.
        </li>
        <li>
          <strong>Responsive Design:</strong> Works on desktop and mobile.
        </li>
      </ul>
    </div>
  );
}

export default Features;