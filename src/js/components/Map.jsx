import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};

const params = {v: '3.exp', key: 'AIzaSyDfxqImf2YiBvuU1dcXpd0dYbso3Z6VdT8'};

export default class Map extends React.Component {
  constructor () {
    super();
    this.state = {};
    this.state.coords = coords;
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  updateLocation() {
    navigator.geolocation.getCurrentPosition(function(location) {
      this.setState({
        coords: {
          lat: location.coords.latitude,
          lng: location.coords.longitude    
        }
      })
    }.bind(this));
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {
    this.updateLocation();
    return (
      <Gmaps
        width={window.innerWidth - 20 + 'px'}
        height={'400px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Map is Loading...'}
        params={params}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={this.state.coords.lat}
          lng={this.state.coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={this.state.coords.lat}
          lng={this.state.coords.lng}
          content={'Kristin\'s home!'}
          onCloseClick={this.onCloseClick} />
      </Gmaps>
    );
  }

};

/*

<Circle
  lat={this.state.coords.lat}
  lng={this.state.coords.lng}
  radius={500}
  onClick={this.onClick} />

*/