import React from "react";
import Header from "./Header";
import Footer from './Footer'
import Grid from './Grid'
import fetch from "../api/birds";
import BirdCard from "./BirdCard";
// import ScrollToTop from './ScrollToTop'

class Home extends React.Component {
    state = {
      found: 0,
      birds: []
    }

    componentDidMount () {
      fetch()
        .then(birds => {
          console.log(birds)
          this.setState({
            found: this.counter(birds),
            birds
          })
        })
        .catch(err => err.message)
    }

  //   counter = (birds) => birds.reduce((found, bird) => {
  //     if (bird.found) {
  //       found++
  //     } return found
  //   }, 0)

  render() {
    return (
      <>
        {/* <ScrollToTop /> */}
        <Header />
        <BirdCard />
        {/* <Grid birds={this.state.birds}/> */}
        <Footer birds={this.state.birds} found={this.state.found}/>
      </>
    );
  }
}
export default Home;
