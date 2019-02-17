import React from 'react';
import { merge } from 'lodash';

const OPTIONS = ['$75,000','$100,000','$200,000','$300,000',
                '$400,000','$500,000','$600,000','$700,000',
                '$800,000','$900,000','$1,000,000','Any Price'];

class PriceDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: this.props.minPrice,
      max: this.props.maxPrice,
      selected: 'left'
    };
    this.handleClick = this.handleClick.bind(this);
    this.selectInput = this.selectInput.bind(this);
  }

  selectInput(side) {
    return e => this.setState({ selected: side });
  }

  handleClick (e) {
    e.preventDefault();
    let price = e.target.innerText;

    let newPrice; let newFilter;
    if (price === 'Any Price') {
      newPrice = 'Any Price';
      newFilter = '';
      this.props.updateFilter({ maxPrice: '', minPrice: '' });
      this.setState({ max: newPrice, min: '' });

    } else {
      newPrice = price.slice(1);
      newFilter = newPrice.slice(0,newPrice.length - 1);
      
      if (this.state.selected === 'left') {
        this.props.updateFilter({ minPrice: newFilter });
        this.setState({ min: newPrice, selected: 'right' });
      } else {
        this.props.updateFilter({ maxPrice: newFilter });
        this.setState({ max: newPrice });
      }
    }
  }

  renderOptions() {
    let klass = () => {
      return this.state.selected === 'left' ?
      'button-left' : 'button-right';
    };

    return OPTIONS.map((option, idx) => {
      if (this.state.selected === 'left' && option === 'Any Price') {
        return null;
      };
      return (
        <button
          key={`price-${idx}`}
          className={klass()}
          onClick={this.handleClick}>
          {option}{this.state.selected === 'left' ? '+' : ''}
        </button>
      );
    });
  }

  renderTitle() {
    let min = this.state.min;
    let max = this.state.max;
    if (max === 'Any Price') {
      return 'Any Price';
    } else if (min.length > 0 && max.length > 0) {
      return `$${parseInt(min)}K - $${parseInt(max)}K`;
    } else if (min.length > 0) {
      return `$${parseInt(min)}K`;
    } else if (max.length > 0) {
      return `Up To $${parseInt(max)}K`;
    } else {
      return 'Any Price';
    }
  }

  render() {
    let show = this.props.show;
    return (
      <div className='filter-bar-dropdown' onClick={this.props.showDropdown}>
        <h2 id='title' className={show ? 'filter-selected' : ''}>{this.renderTitle()}</h2>
        {this.props.renderArrow(show)}
        <div className={show ? 'dropdown' : 'hidden'}>
          <div className="price-range">
            <input className="price-input"
              type='text'
              onFocus={this.selectInput('left')}
              placeholder='Min'
              defaultValue={this.state.min.slice(0,this.state.min.length)}/>
            <span>-</span>
            <input className="price-input"
              type='text'
              onFocus={this.selectInput('right')}
              placeholder='Max'
              defaultValue={this.state.max === 'Any Price' ? '' : this.state.max}/>
          </div>
          {this.renderOptions()}
        </div>
      </div>
    );
  }
}

export default PriceDropdown;
