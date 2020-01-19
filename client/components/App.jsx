import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Perching from './Perching'
import Instructions from './Instructions'
import BirdProfile from './BirdProfile'
import BirdInfo from './BirdInfo'
import fetch from '../api/birds'

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

  render () {
    return this.state.birds.length === 0 ? null : (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path='/profile/:id/info' render={(props) => {
              return <BirdInfo birds={this.state.birds} {...props}/>
            }}/>
            <Route exact path='/profile/:id' render={(props) => {
              return <BirdProfile {...props}/>
            }}/>
            <Route exact path='/instructions' component={Instructions}/>
            <Route exact path='/' render={() => (
              <Perching />
            )}/>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App
