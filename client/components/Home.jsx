import React from "react";
import Header from "./Header";
import Grid from './Grid'


class Home extends React.Component {
  

  render() {
    return (
      <>
        
        <Header birds={this.props.birds} found={this.props.found} foundNumber={this.props.foundNumber}/>
        <Grid birds={this.props.birds}/>
      
      </>
    );
  }
}
export default Home;
