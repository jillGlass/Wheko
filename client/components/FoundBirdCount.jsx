import React from "react";
import { Button } from "react-bootstrap";

class FoundBirdCount extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="found-birds-btn">
          <div className="btn-text-count">{this.props.found}</div>{" "}
          <div className="btn-text">BIRDS  </div>
          <img className="btn-logo" src="binocsbright.png"/>
        </div>
      </React.Fragment>
    );
  }
}

export default FoundBirdCount;
