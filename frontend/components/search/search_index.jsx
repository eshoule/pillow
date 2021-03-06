import React from 'react';
import Loader from 'react-loaders'
import SearchIndexItemContainer from './search_index_item_container';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0 , 
      listings: this.props.listings,
      loading: true
    };
    this.renderTitle = this.renderTitle.bind(this);
  }

  componentDidUpdate(oldProps) {
    if (this.props.listings.length !== oldProps.listings.length) {
      this.setState({loading: false});
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
    return this.state.listings.map((listing, idx) => {
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
    if (this.state.listings.length === 0) {
      if (this.state.loading){
        return <Loader type="ball-scale-ripple-multiple" active />;
      } else if (this.props.saved) {
        return (
          <div className="no-results">
            <h2>No homes saved yet</h2>
            <h5>Click <i className="far fa-heart"></i> to track homes you love.</h5>
          </div>
        )
      } else {
        return (
          <div className="no-results">
            <h2>Don't see any homes?</h2>
            <h5>Try a different search.</h5>
          </div>
        );
      }
    };

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