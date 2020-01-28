import React from "react";
import { Navbar, Text, Container } from 'react-bootstrap'
import foundNumber from "../api/foundNumber";


class Header extends React.Component {
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
    return (
      <>
      
        <Navbar
          fixed="top"
          className="justify-content-center backgroundColor"
        >
          <Container style={{flexDirection: 'column', margin: '0px', padding: '0px'}}>
          <Navbar.Text className="fontLarge" style={{padding: '0px', MarginBottom: '0px'}}>Wheko</Navbar.Text>
          <Navbar.Text className="justify-content-end" style={{ padding: "0px" }}>
            Total Birds Spotted: 
          </Navbar.Text>
          <Navbar.Text className="justify-content-end" style={{ padding: "0px" }}>
            Bird Species Spotted: 
          </Navbar.Text>
          </Container>
        </Navbar>
        
      </>
    );
  }
}

export default Header;
