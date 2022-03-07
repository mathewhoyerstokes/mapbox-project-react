import React, { Component } from 'react';
import './Toggler.css';

// im going to take the list, turn it into buttons and pass them into the toggler
class Toggler extends Component {
  setLayer(url) {
    this.props.app.setState({
      style: url
    })
  }

  render() {
    const styles = [
        { name: "Satellite", url: "mapbox://styles/mapbox/streets-v11" },
        { name: "Dark", url: "mapbox://styles/mapbox/dark-v9" },
        { name: "light", url: "mapbox://styles/mapbox/light-v9" }
       ]

    const buttons = styles.map((style, index) => {
      let className = ""

      if (style.url === this.props.app.state.style) {
        className = "selected"
      }

      return <button className={className} key={index} onClick={() => this.setLayer(style.url)}>{style.name}</button>
    })

    return (
        <div className="toggler">
          {buttons}
        </div>
    );
  }
}

export default Toggler;