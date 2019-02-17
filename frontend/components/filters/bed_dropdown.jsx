import React from 'react';

const OPTIONS = ['0+','1+','2+','3+','4+','5+','6+'];

class BedDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    this.props.updateFilter({ beds: e.target.innerText });
  }

  renderOptions() {
    return OPTIONS.map((option, idx) => {
      let klass = this.props.beds === option ? 'button-selected' : '';
      return (
        <button onClick={this.handleClick}
          key={`bed-${idx}`}
          className={klass}>
            {option}
        </button>
      );
    });
  }

  render() {
    let show = this.props.show;
    return (
      <div className='filter-bar-dropdown' 
           onClick={this.props.showDropdown}>
        <h2 id='title' className={show ? 'filter-selected' : ''} >
          {this.props.beds} Beds
        </h2>
        {this.props.renderArrow(show)}
        <div className={show ? 'dropdown' : 'hidden'}>
          {this.renderOptions()}
        </div>
      </div>
    );
  }
}

export default BedDropdown ;