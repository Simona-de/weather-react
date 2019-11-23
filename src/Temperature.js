import React, { Component } from "react";
import Celsius from "./Celsius";
import HumidityWind from "./HumidityWind";

export default class temperature extends Component {
  render() {
    return (
      <div className="row">
        <Celsius />
        <HumidityWind />
      </div>
    );
  }
}
