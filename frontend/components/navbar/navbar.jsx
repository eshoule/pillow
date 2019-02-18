import React from 'react';
import { Link } from 'react-router-dom';
import {
  BuyDropdown,
  RentDropdown,
  SellDropdown,
  MortgageDropdown,
  AgentDropdown,
  MoreDropdown,
} from './navbar_dropdowns';

const LINKS = [
  {path: '/homes/for-sale', name: 'Buy'},
  {path: '/homes/for-rent', name: 'Rent'},
  
  {path: '/sell', name: 'Sell'},
  {path: '/home-loans', name: 'Mortgages'},
  {path: '/agent-finder', name: 'Agent Finder'},
  {path: '/more', name: 'More'},
];

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      show: '', 
      selected: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.renderDropdown = this.renderDropdown.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.showSavedHomes = this.showSavedHomes.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.fetchSaves();
    }
    this.getSelected(this.props.location.pathname);
  }

  componentDidUpdate(oldProps) {
    if (this.props.currentUser && this.props.currentUser !== oldProps.currentUser) {
      this.props.fetchSaves();
    }

    if (this.props.location.pathname !== oldProps.location.pathname) {
      this.getSelected(this.props.location.pathname);
    }
  }

  getSelected(path) {
    if (path.includes('rent')) {
      this.setState({ selected: 'Rent'});
    } else if (path.includes('sell')) {
      this.setState({ selected: 'Sell'});
    } else if (path.includes('loans')) {
      this.setState({ selected: 'Mortgages'});
    } else if (path.includes('agent')) {
      this.setState({ selected: 'Agent Finder'});
    } else if (path.includes('more')) {
      this.setState({ selected: 'More'});
    } else if (path.includes('homes')) {
      this.setState({ selected: 'Buy'});
    } else if (path.includes('buy')) {
      this.setState({ selected: 'Buy'});
    } else {
      this.setState({ selected: ''});
    }
  }

  handleClick(type) {
    return () => {
      this.props.clearErrors();
      this.props.openModal(`session-${type}`);
    };
  }

  handleSelect(type) {
    const updateFilter = this.props.updateFilter;
    return e => {
      let listings = [0,1,2,3,4,5,6,7,8,9];
      let homes = [0,1,2,3,4,5];
      if (type === 'Rent') listings = [10];
      updateFilter({ listingType: listings, homeType: homes });
      this.setState({ selected: type });
    };
  }

  showSavedHomes() {
    this.props.history.push('/homes/for-sale');
    this.props.updateFilter({ saved: true });
  }

  renderDropdown() {
    switch(this.state.show) {
      case 'Buy':
        return <BuyDropdown location={this.props.location}/>;
      case 'Rent':
        return <RentDropdown location={this.props.location}/>;
      case 'Sell':
        return <SellDropdown location={this.props.location}/>;
      case 'Mortgages':
        return <MortgageDropdown location={this.props.location}/>;
      case 'Agent Finder':
        return <AgentDropdown location={this.props.location}/>;
      case 'More':
        return <MoreDropdown location={this.props.location}/>;
      case 'myzillow':
        return (
          <div className="user-dropdown">
            <h3>My Homes</h3>
            <button onClick={this.showSavedHomes}>Saved homes</button>
            <button onClick={this.handleLogout}>Sign out</button>
          </div>
        );
      default: return null;
    }
  }

  handleLogout() {
    this.setState({ show: '' });
    this.props.logout();
  }

  showDropdown(type) {
    return e => this.setState({ show: type });
  }

  renderButtons() {
    let show = this.props.currentUser;
    return(
      <ul>
        <li><Link to="/rentals">List Your Rental</Link></li>
        <li onMouseOver={this.showDropdown('myzillow')}
            className={show ? 'my-zillow' : 'hidden'}>
          <button>My Pillow
            <div>{this.props.saves}</div>
          </button>
        </li>
        <li className={show ? 'hidden' : 'join'}>
          <button onClick={this.handleClick('signin')}>Sign In</button>
        </li>
        <li className={show ? 'hidden' : 'join'}>
          <button onClick={this.handleClick('signup')}>Join</button>
        </li>
      </ul>
    );
  }

  getLinkClass(link) {
    if (this.state.selected === link.name ) {
          return 'selected-link';
    }
    return '';
  }

  renderLinks() {
    return LINKS.map((link, idx) => {
      return (
        <li key={`link-${idx}`}
            onMouseEnter={this.showDropdown(link.name)}
            className={this.getLinkClass(link)}>
          <Link to={link.path} 
                onClick={this.handleSelect(link.name)}>
            {link.name}
          </Link>
        </li>
      );
    });
  }

  render() {
    const home = this.props.location.pathname.includes('homes');
    return (
      <div className='navbar' 
           onMouseLeave={this.showDropdown('')}>
        <Link to="/" 
              className={home ? 'logo' : 'logo  logo-home'}>
          <i className="fas fa-cloud-moon"></i>
        </Link>
        {this.renderLinks()}
        {this.renderButtons()}
        {this.renderDropdown()}
      </div>
    );
  }
}

export default NavBar;