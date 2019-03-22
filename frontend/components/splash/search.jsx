import React from 'react';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({ search: e.currentTarget.value });
  }

  handleClick(e) {
    const query = this.input.value.split(" ").join('_');
    let listings = [0,1,2,3,4,5,6,7,8,9];
    let newPath =`/homes/for-sale/${query}`;

    if (this.props.history.location.pathname.includes('/rent')){
      listings = [10];
      newPath = `/homes/for-rent/${query}`;
    } 
    
    this.props.updateFilter({ listingType: listings })
    this.props.history.push(newPath)
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') this.handleClick();
  }

  render() {
    return(
      <div className="search">
        <input
          type="text"
          placeholder="Enter an address, neighborhood, city, or
                       ZIP code in California"
          ref={input => this.input = input}
          onChange={this.update}
          onKeyPress={this.handleKeyPress}/>
        <button onClick={this.handleClick}>Search</button>
      </div>
    );
  }
}

export default withRouter(Search);