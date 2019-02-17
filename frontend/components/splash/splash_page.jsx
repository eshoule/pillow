import React from 'react';
import Search from './search';
import Links from './links';
import Footer from './footer';
import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';

class SplashPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = { selected: 0 };
    this.selectButton = this.selectButton.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
  }

  componentDidUpdate(oldProps) {
    const path = this.props.location.pathname;
    if (path !== oldProps.location.pathname) {
      const newSelection = this.getSelected(path);
      this.setState({ selected: newSelection });
    }
  }

  getSelected(pathname) {
    switch (pathname) {
      case '/': return 0;
      case '/buy': return 0;
      case '/rent': return 1;
      case '/sell': return 2;
      case '/find-your-home': return 3;
    }
  }

  selected(idx) {
    return this.state.selected === idx;
  }

  selectButton(idx, path) {
    return e => {
      this.setState({ selected: idx });
      this.props.history.push(path);
    };
  }

  renderButtons() {
    const buttonText = ['Buy','Rent','Sell','Pestimate'];
    const paths = ['buy','rent','sell','find-your-home'];
    return buttonText.map((text, idx) => (
      <button
        key={`button-${idx}`}
        onClick={this.selectButton(idx, paths[idx])}
        className={this.selected(idx) ? 'selected' : ''}>
        {text}
      </button>
    ));
  }

  renderArrows() {
    return [0,1,2,3].map(idx => (
      <div
        key={`arrows-${idx}`}
        className="arrow-up"
        id={this.selected(idx) ? '' : 'hidden'} 
      />  
    ));
  }

  renderTitle() {
    switch (this.state.selected){
      case 0: return 'Find your way home';
      case 1: return 'Find your next rental';
      case 2: return 'Sell your home';
      case 3: return 'Your Home on Pillow';
    }
  }

  render() {
    return (
      <div>
        <div className={`splash-search background-${this.state.selected}`}>
          <h1>{this.renderTitle()}</h1>
          <div className="splash-buttons">{this.renderButtons()}</div>
          <div className="arrows">{this.renderArrows()}</div>
          <Search updateFilter={this.props.updateFilter}/>
        </div>
        <Links />
        <Footer />
      </div>
    );
  }
}

const mdtp = dispatch => ({
  updateFilter: (filter) => dispatch(updateFilter(filter)),
});

export default connect(null, mdtp)(SplashPage);