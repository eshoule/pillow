import React from 'react';
import HouseMap from './house_map';
import SearchIndexContainer from './search_index_container';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 36.746841, 
      lng: -119.772591,
      zoom: 6,
      show: null,
      xcoord: null,
      ycoord: null,
      markerManager: null
    };
    this.showListingInfo = this.showListingInfo.bind(this);
    this.hideListingInfo = this.hideListingInfo.bind(this);
    this.setMarkers = this.setMarkers.bind(this);
  }

  componentDidMount() {
    this.getLatLngSearch();
  }

  componentDidUpdate(oldProps) {
    const markerManager = this.state.markerManager;
    if (this.props.filters !== oldProps.filters) {
      if (this.props.filters.saved) {
        this.props.fetchSavedListings(this.props.filters)
          .then((res) => {
            markerManager.updateMarkers(Object.values(res.listings), false);
          });
      } else {
        this.props.fetchListings(this.props.filters)
          .then((res) => {
            markerManager.updateMarkers(Object.values(res.listings), false);
          });
      }
    } 
    if (this.props.location.pathname !== oldProps.location.pathname){
      let lastEl = this.props.location.pathname.split("/").pop();
      if (!parseInt(lastEl)) this.getLatLngSearch();
    }
  }

  setMarkers(markerManager) {
    this.setState({ markerManager: markerManager })
  }

  showListingInfo(listing) {
    const marker = this.state.markerManager.findMarker(listing);
    this.state.markerManager.setSelectedIcon(marker);
    this.setState({ 
      show: listing, 
      xcoord: marker.xcoord,
      ycoord: marker.ycoord
    });
  }

  hideListingInfo(listing) {
    const marker = this.state.markerManager.findMarker(listing);
    this.state.markerManager.setUnselectedIcon(marker);
    this.setState({ show: null });
  }

  getLatLngSearch() {
    let query = this.props.history.location.pathname.split("/");
    let newQuery = query[query.length - 1].split("_").join("+"); 
    if (!newQuery.includes('sale') && !newQuery.includes('rent') && !parseInt(newQuery)) {
      $.ajax({
        url: `https://maps.googleapis.com/maps/api/geocode/json?`+
            `address=${newQuery}&key=${window.googleAPIKey}`
      }).then(res => {
        let lat = res.results[0].geometry.location.lat;
        let lng = res.results[0].geometry.location.lng;
        this.setState({ lat: lat, lng: lng, zoom: 10 });
      });
    }
  }

  render() {
    return(
      <div className='search-results'>
        <HouseMap
          listings={this.props.listings}
          openModal={this.props.openModal}
          state={this.state}
          showListingInfo={this.showListingInfo}
          hideListingInfo={this.hideListingInfo}
          setMarkers={this.setMarkers}
          updateFilter={this.props.updateFilter}
        />
        <SearchIndexContainer 
          showListingInfo={this.showListingInfo}
          hideListingInfo={this.hideListingInfo}
        />
      </div>
    );
  }
}

export default SearchResults;