import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

class HouseMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: this.props.state.lat,
      lng: this.props.state.lng,
      zoom: this.props.state.zoom,
      show: this.props.state.show,
      xcoord: this.props.state.xcoord,
      ycoord: this.props.state.ycoord
    };

    this.renderInfo = this.renderInfo.bind(this);
    this.handleMapChange = this.handleMapChange.bind(this);
  }

  componentDidMount() {
    this.createMap();
    this.MarkerManager = new MarkerManager(
      this.map,
      this.handleMarkerClick.bind(this),
      this.props.showListingInfo,
      this.props.hideListingInfo
    );
    this.registerListeners();
  }

  componentDidUpdate(oldProps) {
    if (this.props.listings.length !== oldProps.listings.length) {
      this.MarkerManager.updateMarkers(this.props.listings, false);
    }

    if (this.props.state.show !== oldProps.state.show) {
      this.setState({ 
        show: this.props.state.show,
        xcoord: this.props.state.xcoord,
        ycoord: this.props.state.ycoord 
      });
    }
  }

  handleMapChange() {
    this.props.updateFilter({
      minLat: this.map.getBounds().ma["j"],
      maxLat: this.map.getBounds().ma["l"],
      minLng: this.map.getBounds().ga["j"],
      maxLng: this.map.getBounds().ga["l"]
    });
  }

  createMap() {
    const map = this.refs.map;
    let options = {
      center: {
        lat: this.state.lat,
        lng: this.state.lng
      },
      disableDefaultUI: true,
      zoom: this.state.zoom,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP
      }
    };
    
    this.map = new google.maps.Map(map, options);
  }

  registerListeners() {
    const updateFilter = this.props.updateFilter;

    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      this.props.setMarkers(this.MarkerManager);
      updateFilter({
        minLat: south,
        maxLat: north,
        minLng: west,
        maxLng: east,
      })
    });
  }

  handleMarkerClick(listing) {
    const newPath = this.props.history.location.pathname + `/${listing.id}`;
    this.props.history.push(newPath);
    this.props.openModal('showListing');
  }

  renderInfo() {
    if (this.state.show) {
      const image = this.state.show.photoUrls;
      const top = this.state.ycoord - 5;
      const left = this.state.xcoord - 5;

      const style = {
        position: 'absolute',
        top: top,
        left: left
      };

      const price = Math.floor(this.state.show.price/1000);
      return (
        <div style={style} className="listing-popup">
          <img src={image[0]} />
          <ul>
            <li>${price}K</li>
            <li>
              <p>{this.state.show.beds} bd, {this.state.show.baths} ba</p>
            </li>
            <li>{this.state.show.sqft} sqft</li>
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return(
      <div id='map-container' ref='map'>
        {this.renderInfo()}
      </div>
    );
  }
}

export default withRouter(HouseMap);