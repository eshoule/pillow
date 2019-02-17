import React from 'react';
import { Link } from 'react-router-dom';

const links1 = ['Trulia', 'StreetEasy', 'HotPads', 'Naked Apartments',
                'RealEstate.com', 'Out East']

const links2 = ['ABOUT', 'PESTIMATES', 'RESEARCH', 'CAREERS', 'HELP',
                'ADVERTISE', 'TERMS OF USE & PRIVACY', 'AD CHOICE', 
                'BLOG', 'DATA SCIENCE', 'MOBILE APPS']

const Footer = () => {
  const footer1 = links1.map((link, idx) => (
    <Link to="/" key={`links1-${idx}`}>{link}</Link>
  ));

  const footer2 = links2.map((link, idx) => (
    <Link to="/" key={`links2-${idx}`}>{link}</Link>
  ));

  return (
    <div className="footer">
      <div className="footer-1">
        <li>Pillow Group Brands:</li>
        { footer1 }
      </div>
      <div className="footer-2">
        { footer2 }
      </div>
      <div className="footer-3">
        <Link to="/">eshoule@gmail.com</Link>
        <Link to="https://github.com/eshoule">
          <i className="fab fa-github"></i>
        </Link>
        <Link to="https://linkedin.com/eshoule">
          <i className="fab fa-linkedin-in"></i>
        </Link>
        <Link to="https://angel.co/eshoule">
          <i className="fab fa-angellist"></i>
        </Link>
      </div>
    </div>
  );
};

export default Footer;