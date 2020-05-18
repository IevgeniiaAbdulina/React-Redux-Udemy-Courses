import React, { Component } from "react";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "1019771012870-eerqdgro0gpj45epe4u138uk1q8vhjm4.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }

  render() {
    return <div>Google auth</div>;
  }
}

export default GoogleAuth;
