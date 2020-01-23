import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";

import fetch from "../api/birds";

class App extends React.Component {
  state = {
    birds: []
  }

  componentDidMount () {
    fetch()
      .then(birds => {
        this.setState({
          birds
        })
      })
      .catch(err => console.log(err.message))
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route
              exact
              path="/profile/:id/info"
              render={props => {
                return <BirdCard birds={this.state.birds} {...props} />;
              }}
            />
            {/* <Route
              exact
              path="/profile/:id"
              render={props => {
                return <BirdProfile {...props} />;
              }}
            />
            <Route exact path="/instructions" component={Instructions} /> */}
            <Route exact path="/" render={() => <Home />} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

// render () {
//   return this.state.birds.length === 0 ? null : (
//     <React.Fragment>
//       <Router>
//         <Switch>
//           <Route exact path='/profile/:id/info' render={(props) => {
//             return <BirdInfo birds={this.state.birds} {...props}/>
//           }}/>
//           <Route exact path='/profile/:id' render={(props) => {
//             return <BirdProfile {...props}/>
//           }}/>
//           <Route exact path='/instructions' component={Instructions}/>
//           <Route exact path='/' render={() => (
//             <Home />
//           )}/>
//         </Switch>
//       </Router>
//     </React.Fragment>
//   )
// }
// }
