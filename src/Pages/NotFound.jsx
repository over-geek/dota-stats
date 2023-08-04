import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <Link to="/">
      <button type="button">
        Go Back
      </button>
    </Link>
  </div>
);

export default NotFound;
