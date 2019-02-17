import React from 'react';

class SearchIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    if (!this.props.currentUser) {
      this.props.openModal('session-signin')
    } else if (this.props.saved) {
      this.props.deleteSave(this.props.saveId);
    } else {
      this.props.saveListing(this.props.listing.id);
    }
  }

  handleClick() {
    const newPath = this.props.history.location.pathname + `/${this.props.listing.id}`;
    this.props.history.push(newPath);
    this.props.openModal('showListing');
  }

  renderCircle() {
    switch(this.props.listing.listing_type) {
      case 'for rent':
        return <i className="fas fa-circle purple-circle"></i>;
      case 'recently sold':
        return <i className="fas fa-circle yellow-circle"></i>;
      case 'foreclosed':
        return <i className="fas fa-circle blue-circle"></i>;
      case 'pre-forclosed':
        return <i className="fas fa-circle blue-circle"></i>;
      case 'make me move':
        return <i className="fas fa-circle blue-circle"></i>;
      default :
        return <i className="fas fa-circle red-circle"></i>;
    }
  }

  render() {
    let listing = this.props.listing;
    const pStyle = {
      backgroundImage: `url(${listing.photoUrls[0]})`
    };

    const hStyle = this.props.saved ? { color: 'white' } : {}
    
    return (
      <div onMouseOver={() => this.props.showListingInfo(listing)}
           onMouseOut={() => this.props.hideListingInfo(listing)}
           onClick={this.handleClick}
           style={pStyle}
           className='search-index-item'>
        <div>
          <p className="days">{listing.days} on Pillow</p>
          <i className="fas fa-heart small" 
             onClick={this.handleSave} 
             style={hStyle}>
            <i className="far fa-heart"></i>
          </i>
        </div>
        <div>
        <h1 className="type">
          {this.renderCircle()}
          {`${listing.rental_type} FOR SALE`}
        </h1>
        <div className="info">
          <p>${listing.price.toLocaleString()}</p>
          <p>{listing.beds} bds</p>
          <p>{listing.baths} ba</p>
          <p>{listing.sqft.toLocaleString()} sqft</p>
        </div>
        <div className="address">
          <p>{listing.street}</p>
          <p>{listing.city}</p>
          <p>{listing.state}</p>
          <p>{listing.zip}</p>
        </div>
        <p className="real-estate">Leading Edge RealEstate</p>
      </div>
      </div>
    );
  }
}

export default SearchIndexItem;