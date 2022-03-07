import React, { Component } from 'react';
import './Search.css';

class Search extends Component {

  // set up state for the input
  constructor(props) {
    super(props)

    this.state = {
      value: "",
      isLoading: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    // pull in API request
    const accessToken = "pk.eyJ1IjoibXN0b2tlczMxMDgiLCJhIjoiY2wwZnU1d2pzMHY0YTNka3htaTU5bHRhYyJ9.3DjvUhpVMWKyY8afdFYgFQ"
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.value}.json?access_token=${accessToken}`

    fetch(url)
        .then(response => response.json())
        .then(data => {

          const places = this.props.app.state.places
          const firstResult = data.features[0]

          places.push({
            name: this.state.value,
            longitude: firstResult.center[0],
            latitude: firstResult.center[1],
          })

          this.props.app.setState({
            places: places
          })

          this.setState({
            value: ""
          })
        })
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.value} onChange={this.handleChange} placeholder="Add place..." />
        </form>
    )
  }
}

export default  Search