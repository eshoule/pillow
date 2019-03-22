import React from 'react';

const OPTIONS = ['For Sale','By Agent','By Owner', 'New Construction',
'Foreclosures', 'Coming Soon', 'Potential Listings', 'Foreclosed',
'Pre-Foreclosure', 'Make Me Move','For Rent','Recently Sold'];

class ListingTypeDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.listingType.map(el => parseInt(el))
    };
    this.selectBox = this.selectBox.bind(this);
    this.renderCircles = this.renderCircles.bind(this);
  }

  componentDidUpdate(oldProps) {
    if (this.props.listingType !== oldProps.listingType) {
      this.setState({ selected: this.props.listingType });
    }
  }

  getCircle(idx) {
    switch(idx) {
      case 0: 
        return <i key={`circle-${idx}`} 
                  className='fas fa-circle red-circle'>
               </i>;
      case 6: 
        return <i key={`circle-${idx}`} 
                  className='fas fa-circle blue-circle'>
               </i>;
      case 10: 
        return <i key={`circle-${idx}`} 
                  className='fas fa-circle purple-circle'>
               </i>;
      case 11: 
        return <i key={`circle-${idx}`} 
                  className='fas fa-circle yellow-circle'>
               </i>;
    }
  }

  getClassName(idx, checked) {
    switch(idx) {
      case 0: case 6: case 10: case 11: 
        return checked ? 
          'checkbox-dropdown checked' : 
          'checkbox-dropdown';
      default: 
        return checked ? 
          'checkbox-dropdown sub-checkbox checked' : 
          'checkbox-dropdown sub-checkbox'; 
    }
  }

  deleteElements(arr1, arr2) {
    arr1.forEach(el => {
      if (arr2.includes(el)) {
        delete arr2[arr2.indexOf(el)];
      }
    });
    return arr2;
  }

  addElements(arr1, arr2) {
    arr1.forEach(el => {
      if (!arr2.includes(el)) {
        arr2.push(el);
      }
    });
    return arr2;
  }

  includesAny(arr1, arr2) {
    let result = false;
    arr1.forEach(el => {
      if (arr2.includes(el)) {
        result = true;
      }
    });
    return result;
  }

  removeChecks(idx, newState) {
    delete newState[newState.indexOf(idx)];
    switch(idx) {
      case 0:
        newState = this.deleteElements([1,2,3,4,5], newState);
        break;
      case 1: case 2: case 3: case 4: case 5:
        let arr1 = [1,2,3,4,5];
        delete arr1[arr1.indexOf(idx)];
        if (!this.includesAny(arr1, newState)) {
          delete newState[newState.indexOf(0)];
        }
        break;
      case 6:
        newState = this.deleteElements([7,8,9], newState);
        break;
      case 7: case 8: case 9:
        let arr2 = [7,8,9];
        delete arr2[arr2.indexOf(idx)];
        if (!this.includesAny(arr2, newState)) {
          delete newState[newState.indexOf(6)];
        }
        break;
    }
    return newState;
  }

  addChecks(idx, newState) {
    newState.push(idx);
    switch(idx) {
      case 0:
        newState = this.addElements([1,2,3,4,5], newState);
        break;
      case 1: case 2: case 3: case 4: case 5:
        if (!newState.includes(0)) newState.push(0);
        break;
      case 6:
        newState = this.addElements([7,8,9], newState);
        break;
      case 7: case 8: case 9:
        if (!newState.includes(6)) newState.push(6);
        break;
    }
    return newState;
  }

  selectBox(idx) {
    let selected = this.state.selected;
    return () => {
      let newState = Object.assign([], selected);
      if (selected.includes(idx)){
        newState = this.removeChecks(idx, newState);
      } else {
        newState = this.addChecks(idx, newState);
      }
      this.props.updateFilter({ listingType: newState });
      return this.setState({ selected: newState });
    };
  }

  renderInputs() {
    return OPTIONS.map((option, idx) => {
      let checked = this.state.selected.includes(idx);
      return (
        <div
          className={this.getClassName(idx, checked)}
          key={`options-${idx}`}
          onClick={this.selectBox(idx)}>
          <div className="input-box">
            <input
              key={`inputs-${idx}`}
              type='checkbox'/>
            </div>
            {this.getCircle(idx)}
            <label>{option} (10)</label>
          
        </div>
      );
    });
  }

  renderCircles() {
    let selected = Object.assign([], this.state.selected);
    return selected.map((el, idx) => {
      return this.getCircle(el, idx);
    });
  }

  render() {
    let show = this.props.show;
    return (
      <div className='filter-bar-dropdown'
        onClick={this.props.showDropdown}>
        {this.renderCircles()}
        <h2 id='title' className={show ? 'filter-selected' : ''}>
          Listing Type
        </h2>
        {this.props.renderArrow(show)}
        <div className={show ? 'dropdown' : 'hidden'}>
          {this.renderInputs()}
        </div>
      </div>
    );
  }
}

export default ListingTypeDropdown;