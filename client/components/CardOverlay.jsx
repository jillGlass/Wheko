import React from "react";
import { render } from "enzyme";

class CardOverlay extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container over-lay">
          <div className="row">
            <div className="col-4"><img src='binocsbright.png'/></div>
            <div className="col-4"></div>
            <div className="col-4"><img src='noteturq.png'/></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
