import React from "react";
import "@babel/polyfill";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import BirdCard from "./BirdCard";
import Profile from "./Profile";
import fetch from "../api/birds";

class App extends React.Component {
  state = {
    found: 0,
    birds: [],
    number: 0
  };

  componentDidMount() {
    fetch()
      .then(birds => {
        this.setState({
          found: this.counter(birds),
          number: this.counterFound(birds),
          birds
        });
      })
      .catch(err => err.message);
  }
  counterFound = birds => {
    const number = birds.map(bird => bird.number);
    const foundnumbers = number.reduce((number, bird) => number + bird, 0);
    return foundnumbers;
  };

  counter = birds =>
    birds.reduce((found, bird) => {
      if (bird.found === 1) {
        found++;
      }
      return found;
    }, 0);

  render() {
    console.log(this.state.found)
    console.log(this.state.number)
    return this.state.birds.length === 0 ? null : (
      <React.Fragment>
        <Router>
          <Switch>
            <Route
              exact
              path="/profile/:id/info"
              render={props => {
                return (
                  <BirdCard
                    number={this.state.birds.number}
                    birds={this.state.birds}
                    found={this.state.found}
                    {...props}
                  />
                );
              }}
            />
            <Route
              exact
              path="/profile/:id"
              render={props => {
                return <Profile {...props} />;
              }}
            />
            {/* <Route exact path="/instructions" component={Instructions} /> */}
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  found={this.state.found}
                  birds={this.state.birds}
                  number={this.state.number}
                />
              )}
            />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
