import React from "react";
import "@babel/polyfill";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import BirdCard from './BirdCard'
import Profile from './Profile'
import fetch from "../api/birds";
import foundNumber from "../api/foundNumber";

class App extends React.Component {
  state = {
    found: 0,
    birds: []
  }

  componentDidMount () {
    fetch()
      .then(birds => {
        this.setState({
          found: this.counter(birds),
          birds
        })
      })
      .catch(err => err.message)
  }

  counter = (birds) => birds.reduce((found, bird) => {
    if (bird.found) {
      found++
    } return found
  }, 0)
  

  render() {
    return this.state.birds.length === 0 ? null : (
      <React.Fragment>
        <Router>
          <Switch>
            <Route
              exact
              path="/profile/:id/info"
              render={props => {
                return <BirdCard  foundNumber={this.state.foundNumber} birds={this.state.birds}found={this.state.found} {...props} />;
              }}
            />
            <Route
              exact
              path="/profile/:id"
              render={props => {
                return <Profile number={this.state.birds.number} {...props} />;
              }}
            />
            {/* <Route exact path="/instructions" component={Instructions} /> */}
            <Route exact path="/" render={() => <Home foundNumber={this.state.foundNumber} found={this.state.found} birds={this.state.birds}/>} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;


