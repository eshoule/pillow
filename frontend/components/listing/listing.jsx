import React from 'react';
import ListingHeaderContainer from './listing_header_container';
import PhotoViewer from './photo_viewer';
import FactsAndFeatures from './facts_and_features';
import Features from './features';
import ListingDropdown from './listing_dropdown';
import ContactAgent from './contact_agent';

const ListingInfo = ({ listing }) => (
  <div className="listing-info">
    <div className="listing-address">
      <li>{listing.street}</li>
      <li className="listing-city">
        {`${listing.city}, ${listing.state} ${listing.zip}`}
      </li>
      <li className="listing-address-sub">
        {`${listing.beds} beds • ${listing.baths} baths • 
          ${listing.sqft} sqft`}
      </li>
      <li className="listing-address-des">
        {listing.description}
      </li>
    </div>
    <div>
      <li>For Sale</li>
      <li className="listing-price">
        ${listing.price.toLocaleString()}
      </li>
      <li className="listing-mortgate">EST. MORTGAGE</li>
      <li className="listing-mortgage-price">
        ${Math.floor(listing.price/300).toLocaleString()}/mo 
        <button></button>
      </li>
    </div>
  </div>
)

class Listing extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchListings(this.props.filters);
  }

  render() {
    const listing = this.props.listing;
    if (!listing) return null;

    return (
      <div className="listing">
      <ListingHeaderContainer listing={listing}/>
      <div></div>
      <PhotoViewer photos={listing.photoUrls}/>
      <ListingInfo listing={listing} />
      <FactsAndFeatures listing={listing}/>
      <Features listing={listing}/>
      <ListingDropdown title={'Home Value'} />
      <ListingDropdown title={'Price / Tax History'} />
      <ListingDropdown title={'Mortgage'} />
      <ListingDropdown title={'Home Expenses'} />
      <ListingDropdown title={`Nearby Schools in ${listing.city}`} />
      <ContactAgent address={
        `${listing.street}, ${listing.city}, 
        ${listing.state} ${listing.zip}`}/>
      <div className="listing-footer"></div>
    </div>
    )
  }
}

export default Listing;