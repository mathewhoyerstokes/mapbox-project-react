import React, { Component } from 'react';
import mapbox from 'mapbox-gl';

class Map extends Component {
  componentDidMount() {
    // use the const app to pass stuff into the map
    const app = this.props.app
    mapbox.accessToken = 'pk.eyJ1IjoibXN0b2tlczMxMDgiLCJhIjoiY2wwZnU1d2pzMHY0YTNka3htaTU5bHRhYyJ9.3DjvUhpVMWKyY8afdFYgFQ';

    const map = new mapbox.Map({
      container: 'map',
      style: app.state.style,
      center: [
         app.state.longitude,
         app.state.latitude
      ],
      zoom: 12
    });

    map.addControl(new mapbox.NavigationControl());

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
