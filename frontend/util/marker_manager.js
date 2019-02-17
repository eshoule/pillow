class MarkerManager {
  constructor(map, handleClick, handleHover, removeHover){
    this.map = map;
    this.handleClick = handleClick;
    this.handleHover = handleHover;
    this.removeHover = removeHover;
    this.markers = {};
    this.state = { counter: 0 };
    this.selectMarker = this.selectMarker.bind(this);
  }

  findMarkerPos(listing) {
    let marker;
    Object.values(this.markers).forEach(mark => {
      if (mark.listingId === listing.id) marker = mark;
    });

    return [marker.xcoord, marker.ycoord];
  }

  selectMarker(listing) {
    if (this.state.counter === 0) {
      this.state.counter = 1;
      this.removeMarker(this.markers[listing.id]);
      this.createMarkerFromListing(listing, true);
    } 
  }

  deselectMarker(listing) {
    this.state.counter = 0;
    this.removeMarker(this.markers[listing.id]);
    this.createMarkerFromListing(listing, false)
  }

  updateMarkers(listings, selected){
    const listingsObj = {};
    listings.forEach(listing => {
      listingsObj[listing.id] = listing;
    });

    listings
      .filter(listing => !this.markers[listing.id])
      .forEach(newListing => {
        this.createMarkerFromListing(newListing, selected);
      });

    Object.keys(this.markers)
      .filter(listingId => !listingsObj[listingId])
      .forEach((listingId) => this.removeMarker(this.markers[listingId]));
      
  }

  getIcon(listing, selected) {
    if (selected) {
      return './assets/green_marker.png'
    } else {
      switch(listing.listing_type) {
        case 'recently sold': return './assets/yellow_marker.png';
        case 'for rent': return './assets/purple_marker.png';
        case 'make me move': return './assets/blue_marker.png';
        case 'pre-foreclosure': return './assets/blue_marker.png';
        case 'foreclosed': return './assets/blue_marker.png';
        default: return './assets/red_marker.png';
      }
    }
  }

  createMarkerFromListing(listing, selected) {
    const icon = {
      url: this.getIcon(listing, selected),
      size: new google.maps.Size(20, 32),
    };

    const position = new google.maps.LatLng(listing.lat, listing.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      listingId: listing.id,
      icon: icon
    });
    
    const coords = this.calculateMarkerPos(marker);
    marker.xcoord = coords[0];
    marker.ycoord = coords[1];
    marker.addListener('click', () => this.handleClick(listing));
    marker.addListener('mouseover', () => this.handleHover(listing));
    marker.addListener('mouseout', () => this.removeHover(listing));
    this.markers[marker.listingId] = marker;
  }

  calculateMarkerPos(marker) {
    const mapWidth = document.getElementById('map-container').offsetWidth;
    const mapHeight = document.getElementById('map-container').offsetHeight;
    const width = (this.map.getBounds().ga["l"] - this.map.getBounds().ga["j"]);
    const height = (this.map.getBounds().ma["l"] - this.map.getBounds().ma["j"]);
    const markerWidth = marker.position.lng() - this.map.getBounds().ga["j"];
    const markerHeight = this.map.getBounds().ma["l"] - marker.position.lat();
    const xcoord = (mapWidth / width) * markerWidth;
    const ycoord = (mapHeight/height) * markerHeight;
    return [xcoord, ycoord]
  }

  removeMarker(marker) {
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId];
  }
}

export default MarkerManager;