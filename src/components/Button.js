import React, { Component } from "react";
import { withRouter } from "react-router";
import { routes } from "../routes";
import "../styles/button.scss";

class Button extends Component {
  handleGoBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || routes.home);
  };

  render() {
    return (
      <button onClick={this.handleGoBack} className="go-back-btn">
        Back
      </button>
    );
  }
}

export default withRouter(Button);
