import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  render() {
    const { selectedFlat } = this.props;

    let marker = null;
    let center = { lat: 48.856614, lng: 2.352222 };

    if (selectedFlat) {
      marker = (
        <div className="marker" lat={selectedFlat.lat} lng={selectedFlat.lng}>
          &nbsp;
        </div>
      );
      center = {
        lat: selectedFlat.lat,
        lng: selectedFlat.lng,
      };
    }

    return (
      <div className="map-container" style={{ height: '100vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: '',
          }}
          center={center}
          zoom={12}
        >
          {marker}
        </GoogleMapReact>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedFlat: state.selectedFlat
  };
}

export default connect(mapStateToProps)(Map);
