import React from 'react';
import { Link } from 'react-router-dom';

const titles = ["REAL ESTATE", "RENTALS",
    "MORTGATE RATES", "BROWSE HOMES"];

const links = [
  ["Browse all homes", "Albuquerque real estate",
  "Atlanta real estate", "Boston real estate",
  "Baltimore real estate"],
  ["Rental buildings", "Albuquerque apartments for rent",
  "Atlanta apartments for rent", "Boston apartments for rent",
  "Baltimore apartments for rent"],
  ["Current mortgage rates", "Albuquerque mortgate rates",
  "Atlanta mortgate rates", "Boston mortgate rates",
  "Baltimore mortgate rates"],
  ["California","Texas","New York","Florida","Illinois"]];

const Links = () => {
  const footerLinks = () => {
    return [0,1,2,3].map(i =>  {
      return (
        <div key={`links-${i}`}>
          <h2>{titles[i]}</h2>
          <ul>
            <li><Link to="/">{links[i][0]}</Link></li>
            <li><Link to="/">{links[i][1]}</Link></li>
            <li><Link to="/">{links[i][2]}</Link></li>
            <li><Link to="/">{links[i][3]}</Link></li>
            <li><Link to="/">{links[i][4]}</Link></li>
            <li><Link to="/">More</Link></li>
          </ul>
        </div>
      );
    });
  };

  return <div className="links"> { footerLinks() } </div>;
};

export default Links;