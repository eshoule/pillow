import React from 'react';

class PhotoViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shift: 0 };
    this.renderImages = this.renderImages.bind(this);
    this.showPhotosRight = this.showPhotosRight.bind(this);
    this.showPhotosLeft = this.showPhotosLeft.bind(this);
  }
  
  renderImages() {
    return this.props.photos.slice(1,13).map((photo, idx) => {
      return <img key={`photo-${idx}`} src={photo}></img>;
    });
  }

  showPhotosRight() {
    let newState = this.state.shift - 400;
    const maxShift = -1 * (((this.props.photos.length - 1) / 2) * 200 - 450);
    if (newState < maxShift) newState = maxShift;
    this.setState({ shift: newState });
  }

  showPhotosLeft() {
    let newState = this.state.shift + 400;
    if (newState > 0) newState = 0;
    this.setState({ shift: newState });
  }

  render() {
    const style = {left: this.state.shift};

    return (
      <div className="photo-viewer" >
        <i className="fas fa-angle-left" 
           onClick={this.showPhotosLeft}>
        </i>
        <div className="photo-scroll" style={style}>
          <img className='img-1' src={this.props.photos[0]}></img>
          <div className="photo-viewer-images">{this.renderImages()}</div>
        </div>
        <i className="fas fa-angle-right" 
           onClick={this.showPhotosRight}>
        </i>
      </div>
    );
  }
}

export default PhotoViewer;