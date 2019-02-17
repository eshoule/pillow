import React from 'react';

class ListingDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: false, dropdown: ''};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let newState = this.state.show ? false : true;
    if (!this.state.show) {
      $.ajax({
        url: `https://api.giphy.com/v1/gifs/random?api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G`,
      }).then( res => {
        this.setState({ 
          dropdown: res.data.image_url,
          show: newState })
      });
    } else {
      this.setState({ show: newState });
    }
  }

  renderArrow() {
    if (this.state.show) {
      return <i className="fas fa-angle-up"></i>
    } else {
      return <i className="fas fa-angle-down"></i>
    }
  }

  render() {
    const style = this.state.show ? 
      { display: 'inline' } : { display: 'none' };

    return(
      <div className="listing-dropdown">
        <div className="listing-dropdown-title"
             onClick={this.handleClick}>
          <h1>{this.props.title}</h1>
          {this.renderArrow()}
        </div>
        <img className="listing-dropdown-result" 
             style={style}
             src={this.state.dropdown} />
      </div>
    );
  }
}

export default ListingDropdown;