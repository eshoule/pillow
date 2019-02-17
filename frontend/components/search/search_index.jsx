import React from 'react';
import SearchIndexItemContainer from './search_index_item_container';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0 , 
      listings: this.props.listings
    };
    this.renderTitle = this.renderTitle.bind(this);
  }

  componentDidUpdate(oldProps) {
    if (this.props.listings.length !== oldProps.listings.length) {
      this.setState({ listings: this.props.listings });
    }
  }

  handleClick(idx) {
    return e => {
      let listings = this.state.listings;
      let sortedListings = () => {
        switch (idx) {
          case 0:
            return this.props.shuffle(listings);
          case 1:
            return this.props.shuffle(listings);
          case 2:
            return listings.sort((a,b) => a.price - b.price);
          }
        };
      this.setState({ selected: idx, listings: sortedListings() });
    };
  }

  renderIndexItems() {
    if (this.props.listings.length === 0) {
      return (
        <div>
          <h2>Don't see any homes?</h2>
          <h5>Try a different search.</h5>
        </div>
      );
    }

    return this.state.listings.map((listing, idx) => {
      // let saved = this.props.saves[listing.id] ? true : false
      return (
        <SearchIndexItemContainer
          key={`listing-${idx}`}
          listing={listing}
          showListingInfo={this.props.showListingInfo}
          hideListingInfo={this.props.hideListingInfo}
        />
      );
    });
  }

  renderButtons() {
    const selected = this.state.selected;
    return ['Homes for You','Newest','Cheapest'].map((el, idx) => {
      return (
        <button
          key={`button-${idx}`}
          className={selected === idx ? 'selected' : ''}
          onClick={this.handleClick(idx)}>
          {el}
        </button>
      );
    });
  }

  renderTitle() {
    if (this.props.saved) {
      return <h2>Saved Homes</h2>;
    } else {
      return <h2>{this.state.listings[0].city} Real Estate</h2>;
    }
  }

  showNumberResults() {
    if (this.state.listings.length === 0) {
      return 'No Results';
    } else {
      return this.state.listings.length
    }
  }

  render() {
    if (this.state.listings.length === 0) return null;
    return (
      <div className='search-index'>
        <div className='search-title'>
          {this.renderTitle()}
          <h3>{this.showNumberResults()} results.</h3>
        </div>
        <div>{this.renderButtons()}</div>
        <div className='index-items'>{this.renderIndexItems()}</div>
      </div>
    );
  }
}

export default SearchIndex;