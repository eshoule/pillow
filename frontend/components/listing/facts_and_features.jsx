import React from 'react';

class FactsAndFeatures extends React.Component {
  constructor(props) {
    super(props);
    const home = this.props.listing;
    this.listingInfo = [
      {class: "far fa-building", h5: "Type", h6: home.rental_type},
      {class: "far fa-snowflake", h5: "Cooling", h6: home.cooling},
      {class: "far fa-clock", h5: "Days on Zillow", h6: home.days},
      {class: "far fa-calendar", h5: "Year Built", h6: home.year},
      {class: "fas fa-parking", h5: "Parking", h6: home.parking},
      {class: "fas fa-chart-line", h5: "Price/sqft", h6: Math.floor(home.price / home.sqft)},
      {class: "fas fa-thermometer-half", h5: "Heating", h6: home.heating},
      {class: "far fa-map", h5: "Lot", h6: home.lot},
      {class: "far fa-user", h5: "Saves", h6: home.saves}
    ];
  }

  render() {
    const renderFeatures = this.listingInfo.map((el, idx) => (
      <div key={`feature-${idx}`}>
        <i className={el.class}></i>
        <div className="listing-details">
          <h5>{el.h5}</h5>
          <h6>{el.h6}</h6>
        </div>
      </div>
    ));

    return (
      <div className="facts-and-features">
        <h4>Facts and Features</h4>
        <div>
          { renderFeatures }
        </div>
      </div>
    );
  }
}

export default FactsAndFeatures;