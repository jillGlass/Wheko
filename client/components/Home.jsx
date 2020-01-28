import React from "react";
import Header from "./Header";
import Grid from './Grid'
import fetch from "../api/birds";
// import ScrollToTop from './ScrollToTop'

class Home extends React.Component {
    // state = {
    //   found: 0,
    //   birds: []
    // }

    // componentDidMount () {
    //   fetch()
    //     .then(birds => {
    //       this.setState({
    //         found: this.counter(birds),
    //         birds
    //       })
    //     })
    //     .catch(err => err.message)
    // }

    // counter = (birds) => birds.reduce((found, bird) => {
    //   if (bird.found) {
    //     found++
    //   } return found
    // }, 0)

  render() {
    return (
      <>
        
        <Header birds={this.props.birds} found={this.props.found}/>
        {/* <Grid birds={this.state.birds}/> */}
      
      </>
    );
  }
}
export default Home;
