import React, { Component } from "react";
import openSocket from "socket.io-client";

import LandingPage from "../components/LandingPage/LandingPage";

class MainContainers extends Component {
  state = {
    pi: "0.0",
    sunCircumference: "0.0",
    sunCircumferenceUnit: "Million KMs",
  };

  componentDidMount() {
    console.log("componentDidMount");
    const socket = openSocket("http://localhost:8080");
    socket.on("newPi", (data) => this.updatePiAndCircumference(data));
  }

  updatePiAndCircumference(data) {
    console.log("Updated");
    this.setState({
      pi: data.pi,
      sunCircumference: data.sunCircumference,
      sunCircumferenceUnit: data.sunCircumferenceUnit,
    });
  }

  render() {
    return (
      <LandingPage
        pi={this.state.pi}
        sunCircumference={this.state.sunCircumference}
        sunCircumferenceUnit={this.state.sunCircumferenceUnit}
      />
    );
  }
}

export default MainContainers;
