import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';

class Map extends Component {
  componentDidMount() {
    // use the const app to pass stuff into the map
    const app = this.props.app
    mapboxgl.accessToken = 'pk.eyJ1IjoibXN0b2tlczMxMDgiLCJhIjoiY2wwZnU1d2pzMHY0YTNka3htaTU5bHRhYyJ9.3DjvUhpVMWKyY8afdFYgFQ';

    const map = new mapboxgl.Map({
      container: 'map',
      style: app.state.style,
      center: [
         app.state.longitude,
         app.state.latitude
      ],
      zoom: 12
    });

    map.addControl(new mapboxgl.NavigationControl());

    this.props.app.setState({
      map: map
    })
  }

  render() {
    const app = this.props.app
    const map = this.props.app.state.map

    if (map) {
      map.setStyle(app.state.style)
    }

    return (
      <div id="map"></div>
    );
  }
}

export default Map;
