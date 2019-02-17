import React from 'react';
import ListingTypeDropdown from './listing_type_dropdown';
import PriceDropdown from './price_dropdown';
import BedDropdown from './bed_dropdown';
import HomeTypeDropdown from './home_type_dropdown';

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      search: this.getSearchValue(), 
      show: '',
    };
    
    this.update = this.update.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.viewSaved = this.viewSaved.bind(this);
  }

  viewSaved() {
    let saved = this.props.filters.saved ? false : true;
    this.props.updateFilter({ saved: saved })
  }

  update(e) {
    this.setState({ search: e.currentTarget.value });
  }

  getSearchValue() {
    let path = this.props.history.location.pathname.split("/");
    let value = path[path.length - 1].split("_").join(" ");
    if (value.includes('for-sale') || value.includes('for-rent')) return "";
    return value;
  }

  handleClick(e) {
    const query = this.input.value.split(" ").join('_');
    this.props.history.push(`/homes/for-sale/${query}`);
  }

  renderArrow(show) {
    return show ?
      <i className="fas fa-sort-up filter-selected"></i> :
      <i className="fas fa-sort-down"></i>;
  }

  renderButton() {
    if (!this.props.currentUser) {
      return null;
    } else {
      return (
        <button onClick={this.viewSaved}>
        Saved Homes ({this.props.saves.length})
        </button>
      );
    }
  }

  showDropdown(type) {
    return e => {
      if (type === this.state.show && e.target.id === 'title') {
        this.setState({ show: '' });
      } else {
        this.setState({ show: type });
      }
    };
  }

  renderSaved() {
    return (
      <div className='filter-bar'>
        <div className='filter-bar-left'>
        </div>
        <div className='filter-bar-right'>
          <button onClick={this.viewSaved}>
            Back To Search
          </button>
        </div>
      </div>
    )
  }

  renderAll() {
    return (
      <div className='filter-bar'>
        <div className='filter-bar-left'>
          <input
            ref={input => this.input = input}
            className='filter-bar-search'
            type="text"
            onChange={this.update}
            placeholder="Address, Neighborhood, or Zip"
            value={this.state.search}/>
          <i className="fas fa-search" onClick={this.handleClick}></i>
          <ListingTypeDropdown
            showDropdown={this.showDropdown('listing')}
            listingType={this.props.filters.listingType}
            show={this.state.show === 'listing'}
            updateFilter={this.props.updateFilter}
            renderArrow={this.renderArrow}/>
          <PriceDropdown
            showDropdown={this.showDropdown('price')}
            minPrice={this.props.filters.minPrice}
            maxPrice={this.props.filters.maxPrice}
            show={this.state.show === 'price'}
            updateFilter={this.props.updateFilter}
            renderArrow={this.renderArrow}/>
          <BedDropdown
            showDropdown={this.showDropdown('bed')}
            beds={this.props.filters.beds}
            show={this.state.show === 'bed'}
            updateFilter={this.props.updateFilter}
            renderArrow={this.renderArrow}/>
          <HomeTypeDropdown
            showDropdown={this.showDropdown('home')}
            homes={this.props.filters.homeType}
            show={this.state.show === 'home'}
            updateFilter={this.props.updateFilter}
            renderArrow={this.renderArrow}/>
        </div>
        <div className='filter-bar-right'>
          {this.renderButton()}
        </div>
      </div>
    )
  }

  render() {
    if (this.props.filters.saved) {
      return this.renderSaved();
    } else {
      return this.renderAll();
    }
  }
}

export default FilterBar;