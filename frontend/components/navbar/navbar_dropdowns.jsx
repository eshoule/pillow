import React from 'react';
import { Link } from 'react-router-dom';

export const BuyDropdown = ({ location }) => {
  return (
    <div className={location.pathname.includes('homes') ?
    'navbar-dropdown-home' : 'navbar-dropdown'}>
      <div className="dropdown-col">
        <div>
          <h3>Homes For Sale</h3>
            <Link to='/'>Homes for Sale</Link>
            <Link to='/'>Foreclsoures</Link>
            <Link to='/'>For Sale By Owner</Link>
            <Link to='/'>Open House</Link>
        </div>

        <div>
          <h3 style={{color: "white"}}>.</h3>
          <Link to='/'>New construction</Link>
          <Link to='/'>Coming Soon</Link>
          <Link to='/'>Recent home sales</Link>
          <Link to='/'>"All Homes"</Link>
        </div>
      </div>

      <div>
        <h3>Resources</h3>
        <Link to='/'>Buyers Guide</Link>
        <Link to='/'>Foreclosure center</Link>
        <Link to='/'>Real estate app</Link>
        <Link to='/'>Find a buyer's agent</Link>
        <Link to='/'>Change your address</Link>
      </div>
    </div>
  );
};

export const RentDropdown = ({ location }) => {
  return (
    <div className={location.pathname.includes('homes') ?
    'navbar-dropdown-home' : 'navbar-dropdown'}>
      <div>
        <h3>Search For Rentals</h3>
        <Link to='/'>Rental Buildings</Link>
        <Link to='/'>Apartments for rent</Link>
        <Link to='/'>Houses for rent</Link>
        <Link to='/'>All Rental listings</Link>
        <Link to='/'>All Rental buildings</Link>
      </div>
      <div>
        <h3>I'm a Rental Manager</h3>
        <Link to='/'>My listings</Link>
        <Link to='/'>List a rental (it's free)</Link>
        <Link to='/'>Received applications</Link>
        <Link to='/'>Rent payments</Link>
        <Link to='/'>Resource center</Link>
      </div>
      <div>
        <h3>I'm a Renter</h3>
        <Link to='/'>My application status</Link>
        <Link to='/'>My rent payments</Link>
        <Link to='/'>Renter profile</Link>
        <Link to='/'>Rent affordability calculator</Link>
        <Link to='/'>Renters Guide</Link>
      </div>
    </div>
  );
};

export const SellDropdown = ({ location }) => {
  return (
    <div className={location.pathname.includes('homes') ?
    'navbar-dropdown-home' : 'navbar-dropdown'}>
      <div>
        <h3>Selling Tools</h3>
        <Link to='/'>See your home's Pestimate</Link>
        <Link to='/'>Neighborhood Home Values</Link>
        <Link to='/'>Add a Home Inspection</Link>
        <Link to='/'>Sellers Guide</Link>
      </div>
      <div>
        <h3>Post a Home For Sale</h3>
        <Link to='/'>For sale by agent</Link>
        <Link to='/'>For sale by owner</Link>
        <Link to='/'>Coming soon</Link>
        <Link to='/'>Make me move</Link>
      </div>
    </div>
  );
};

export const MortgageDropdown = ({ location }) => {
  return (
    <div className={location.pathname.includes('homes') ?
    'navbar-dropdown-home' : 'navbar-dropdown'}>
      <div>
        <h3>Shop Mortgages</h3>
        <Link to='/'>Mortgage lenders</Link>
        <Link to='/'>HELOC lenders</Link>
        <Link to='/'>Mortgage rates</Link>
        <Link to='/'>Refinance rates</Link>
        <Link to='/'>All mortgage rates</Link>
      </div>
      <div>
        <h3>Calculator</h3>
        <Link to='/'>Mortgage Calculator</Link>
        <Link to='/'>Refinance Calculator</Link>
        <Link to='/'>Affordability Calculator</Link>
        <Link to='/'>Ammortization Calculator</Link>
        <Link to='/'>Dept-to-Income Calculator</Link>
      </div>
      <div>
        <h3>Resources</h3>
        <Link to='/'>Lender reviews</Link>
        <Link to='/'>Mortgage learning center</Link>
        <Link to='/'>Mortgages app</Link>
        <Link to='/'>Lenderresource center</Link>
      </div>
    </div>
  );
};

export const AgentDropdown = ({ location }) => {
  return (
    <div className={location.pathname.includes('homes') ?
    'navbar-dropdown-home' : 'navbar-dropdown'}>
      <div className="dropdown-col">
        <div>
          <h3>Looking for pros?</h3>
          <Link to='/'>Real estate agents</Link>
          <Link to='/'>Property managers</Link>
          <Link to='/'>Home inspectors</Link>
          <Link to='/'>Other pros</Link>
        </div>
        <div>
          <h3 style={{color: "white"}}>.</h3>
          <Link to='/'>Home improvement pros</Link>
          <Link to='/'>Home builders</Link>
          <Link to='/'>Real estate photographers</Link>
        </div>
      </div>
      <div className="dropdown-col">
        <div>
          <h3>I'm a pro</h3>
            <Link to='/'>Agent advertising</Link>
            <Link to='/'>Agent resource center</Link>
            <Link to='/'>Create a free agent account</Link>
        </div>
        <div>
          <h3 style={{color: "white"}}>.</h3>
          <Link to='/'>Real estate marketing guide</Link>
          <Link to='/'>Agent email scripts</Link>
          <Link to='/'>Listing flyer templates</Link>
        </div>
      </div>
    </div>
  );
};

export const MoreDropdown = ({ location }) => {
  return (
    <div className={location.pathname.includes('homes') ?
    'navbar-dropdown-home' : 'navbar-dropdown'}>
      <div>
        <h3>Blogs</h3>
        <Link to='/'>Pillow Porchlight</Link>
        <Link to='/'>Pillow engingeering blog</Link>
        <Link to='/'>Pillow research</Link>
      </div>
    </div>
  );
};