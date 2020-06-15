import React from "react";

export default class GeoData extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      latitude: "",
      longitude: ""
    };
  }

  handleChange(e) {
    this.setState({
      latitude: e.target.value,
      longitude: e.target.value
    });
  }

  render() {
    const latitude = this.state.latitude;
    const longitude = this.state.longitude;

    return (
      <div>
        <input value={latitude} onChange={this.handleChange} />
        <input value={longitude} onChange={this.handleChange} />
      </div>
    );
  }
}
