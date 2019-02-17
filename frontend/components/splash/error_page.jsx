import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-symbol">
        Error <span>404</span>
      </div>
      <h3>Oops - no one seems to be home.</h3>
      <p>In the meantime try a 
        <Link to="/"> search for homes</Link>
      </p>
    </div>
  );
};

export default ErrorPage;