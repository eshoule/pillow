import React from 'react';

const Features = ({ listing }) => {
  return (
    <div className="features">
      <div className="interior-features">

          <h4>Interior Features</h4>
          <div>
            <div>
              <h5>Bedrooms</h5>
              <p><span>Beds:</span> {listing.beds}</p>
            </div>
            <div>
              <h5>Bathrooms</h5>
              <p><span>Bathrooms:</span> {listing.baths}</p>
            </div>
            <div>
              <h5>Appliances</h5>
            </div>
            <div>
              <h5>Heating and Cooling</h5>
            </div>
            <div>
              <h5>Flooring</h5>
              <p><span>Floor size:</span> {listing.sqft}</p>
              <p><span>Flooring:</span> hardwood</p>
            </div>
         
        </div>
      </div>
      <div className="interior-features">
        
          <h4>Exterior Features</h4>
          <div>
            <div><h5>Yard</h5></div>
            <div><h5>Water</h5></div>
            <div><h5>Lot</h5></div>
          </div>
        
      </div>
      <div className="interior-features">
       
          <h4>Other</h4>
          <div>
            <div><h5>Last sold: </h5></div>
            <div><h5>Price/sqft: </h5></div>
          </div>
       
      </div>
    </div>
  );
}

export default Features;