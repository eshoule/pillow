import React from 'react';

class ListingHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { saved: this.props.saved }
    this.saveListing = this.saveListing.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  saveListing() {
    if (this.state.saved) {
      this.props.deleteSave(this.props.saveId)
        .then(() => this.setState({ saved: false }));
    } else {
      const newPath = this.props.location.pathname.split('/');
      const listingId = newPath[newPath.length - 1]
      this.props.saveListing(listingId)
        .then(() => this.setState({ saved: true }));
    }
  }

  handleClick() {
    const path = this.props.location.pathname.split("/")
    const newPath = path.slice(0, path.length - 1).join("/");
    this.props.closeModal();
    this.props.history.push(newPath);
  }

  render() {
    const display1 = this.state.saved ? 'block' : 'none';
    const display2 = this.state.saved ? 'none' : 'block';
    const style1 = {color: '#444', display: display1};
    const style2 = {color: '#444', display: display2};

    return (
      <div className="listing-header">
        <div>
          <button onClick={this.saveListing}>
            <i style={style2} className="far fa-heart"></i>
            <i style={style1} className="fas fa-heart"></i>
            {this.state.saved ? 'Saved' : 'Save' }
          </button>
          <button><i className="fas fa-envelope"></i>Share</button>
          <button>More<i className="fas fa-caret-down"></i></button>
        </div>
        <div>
          <button onClick={this.handleClick}>
            <i className="fas fa-times"></i>Close
          </button>
        </div>
      </div>
    );
  }
}

export default ListingHeader;