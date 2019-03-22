import fontawesome from './fontawesome-markers.min.js';

class MarkerManager {
  constructor(map, handleClick, handleHover, removeHover){
    this.map = map;
    this.handleClick = handleClick;
    this.handleHover = handleHover;
    this.removeHover = removeHover;
    this.setSelectedIcon = this.setSelectedIcon.bind(this);
    this.setUnselectedIcon = this.setUnselectedIcon.bind(this);
    this.getColor = this.getColor.bind(this);
    this.markers = {};
    this.state = { counter: 0 };
  }

  findMarker(listing) {
    let marker;
    Object.values(this.markers).forEach(mark => {
      if (mark.listingId === listing.id) marker = mark;
    });
    return marker;
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

  getColor(listing) {
    switch(listing) {
      case 'recently sold': return "yellow";
      case 'for rent': return "purple";
      case 'make me move': return "blue";
      case 'pre-foreclosure': return "blue";
      case 'foreclosed', 'forclosed': return "blue";
      default: return "red";
    }
  }

  setSelectedIcon(marker) {
    marker.setIcon({
      path: fontawesome.markers.CIRCLE,
      scale: 0.25,
      strokeWeight: 2.5,
      strokeColor: 'white',
      strokeOpacity: 1,
      fillColor: "green",
      fillOpacity: 1.0,
      zIndex: 99999
    });
    marker.setZIndex(200)
  }


  setUnselectedIcon(marker) {
    marker.setIcon({
      path: fontawesome.markers.CIRCLE,
      scale: 0.25,
      strokeWeight: 2.5,
      strokeColor: 'white',
      strokeOpacity: 1,
      fillColor: this.getColor(marker.listing),
      fillOpacity: 1.0,
    });
    marker.setZIndex(0)
    
  }

  createMarkerFromListing(listing, selected) {
    const color = this.getColor(listing.listing_type);
    const position = new google.maps.LatLng(listing.lat, listing.lng);

    const marker = new google.maps.Marker({
      position,
      map: this.map,
      listingId: listing.id,
      icon: {
        path: fontawesome.markers.CIRCLE,
        scale: 0.25,
        strokeWeight: 2.5,
        strokeColor: 'white',
        strokeOpacity: 1,
        fillColor: color,
        fillOpacity: 1.0,
      }
    });
    
    const coords = this.calculateMarkerPos(marker);
    marker.xcoord = coords[0];
    marker.ycoord = coords[1];
    marker.listing = listing.listing_type;

    marker.addListener('click', () => this.handleClick(listing));

    marker.addListener('mouseover', () => {
      this.handleHover(listing);
    });

    marker.addListener('mouseout', () => {
      this.removeHover(listing)
    });

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