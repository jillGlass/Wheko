import React from "react";


class CardOverlay extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container over-lay">
          <div className="row">
            <div className="col-4"><img src='binocsbright.png' width='15px'/></div>
            <div className="col-4">{this.props.number}</div>
            <div className="col-4"><img src='noteturq.png'width='11px'/></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardOverlay
