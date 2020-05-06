import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
  state = {
    latitude: null,
    errMessage: "",
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
        });
      },
      (err) => {
        this.setState({
          errMessage: err.message,
        });
      }
    );
  }

  renderContent() {
    if (this.state.errMessage && !this.state.latitude) {
      return <div>Error: {this.state.errMessage}</div>;
    }
    if (!this.state.errMessage && this.state.latitude) {
      return <SeasonDisplay lat={this.state.latitude} />;
    }
    return <Spinner message="Please accept location request" />;
  }

  render() {
    return (
      <div className="ui centered card" style={appContent}>
        {this.renderContent()}
      </div>
    );
  }
}

const appContent = {
  top: "10vh",
  width: "80vw",
  height: "80vh",
};

ReactDOM.render(<App />, document.querySelector("#root"));
