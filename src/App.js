import React, { Component } from 'react';
import './Map.css'
import Map from "./Map";
import Toggler from "./Toggler";
import Search from "./Search"
import PlacesPanel from "./PlacesPanel";
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      map: null,
      latitude:40.7128,
      longitude: -75.006,
      style: 'mapbox://styles/mapbox/streets-v11',
      places: []
    }
  }

  render() {
    return (
        <div className="App">
          <PlacesPanel app={this}></PlacesPanel>
          <Search app={this}></Search>
          <Toggler app={this}></Toggler>
          <Map app={this}></Map>
        </div>
    );
  }
}

export default App;
