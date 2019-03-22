import React from 'react';

const OPTIONS = [
  'Houses','Apartments','Condos/co-ops',
  'Townhomes', 'Manufactured','Lots/Land'
];

class HomeTypeDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.homes.map(el => parseInt(el))
    };
  }

  componentDidUpdate(oldProps) {
    if (this.props.homes !== oldProps.homes) {
      this.setState({ 
        selected: this.props.homes.map(el => parseInt(el)) 
      })
    }
  }

  handleClick(idx) {
    let selected = this.state.selected;
    return () => {
      let newState;
      if (selected.includes(idx)) {
        newState = Object.assign([], selected);
        delete newState[newState.indexOf(idx)];
      } else {
        newState = Object.assign([], selected);
        newState.push(idx);
      }
      this.props.updateFilter({ homeType: newState });
      this.setState({ selected: newState });
    };
  }

  renderInputs() {
    return OPTIONS.map((option, idx) => {
      let selected = this.state.selected.includes(idx);
      return (
        <div
          onClick={this.handleClick(idx)}
          className={ selected ? 
            'checkbox-dropdown sub-checkbox checked' : 
            'checkbox-dropdown sub-checkbox'}
          key={`home-label-${idx}`}>
          <div className="input-box">
            <input
              key={`inputs-${idx}`}
              type='checkbox'/>
          </div>
          <label>{option}</label>
        </div>
      );
    });
  }

  render() {
    let show = this.props.show;
    return (
      <div className='filter-bar-dropdown'
           onClick={this.props.showDropdown}>
        <h2 id='title' className={show ? 'filter-selected' : ''}>Home Type</h2>
        {this.props.renderArrow(show)}
        <div className={show ? 'dropdown' : 'hidden'}>
          {this.renderInputs()}
        </div>
      </div>
    );
  }
}

export default HomeTypeDropdown;