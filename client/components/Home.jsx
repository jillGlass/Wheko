import React from "react";
import Header from "./Header";
import Grid from "./Grid";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10"><Header number={this.props.number} birds={this.props.birds} found={this.props.found} /></div>
            <div className="col-1"></div>
          </div>
          <div className="row margin-row">
            <div className="col-1"></div>
            <div className="col-10"><Grid birds={this.props.birds} /></div>
            <div className="col-1"></div>
          </div>
         
        </div>
      </>
    );
  }
}
export default Home;
