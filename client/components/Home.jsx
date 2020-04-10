import React from "react";
import Header from "./Header";
import Grid from "./Grid";
import HeaderBoxReset from './HeaderBoxReset'
import reset from '../api/reset'

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10"><Header number={this.props.number} found={this.props.found}/></div>
            <div className="col-1"></div>
          </div>
          <div className="row margin-row">
            <div className="col-1"></div>
            <div className="col-10"><Grid birds={this.props.birds} /></div>
            <div className="col-1"><HeaderBoxReset onClick = {this.props.onClick}/></div>
          </div>
         
        </div>
      </>
    );
  }
 
}
export default Home;
