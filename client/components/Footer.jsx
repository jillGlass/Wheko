import React from "react";
import { Navbar, Text, Container } from "react-bootstrap";

class Footer extends React.Component {

  toggleMessageSpecies = () => {
    if (this.props.found === 1) {
      return 'You have found 1 species!'
    } else if (this.props.found === 20) {
      return 'You have found all of the species!'
    } else return `You have found ${this.props.found} species!`
  }

  toggleMessageBirds = () => {
    if (this.props.found === 1) {
      return 'You have found 1 bird!'
    } else if (this.props.found === 20) {
      return 'You have found all of the birds!'
    } else return `You have found ${this.props.found} birds!`
  }

  render() {
    return (
      <>
        <Navbar
          fixed="bottom"
          className="justify-content-center backgroundColor fontMedium"
        >
          <Container style={{flexDirection: 'column'}}>
          <Navbar.Text>Total Birds Spotted: {this.toggleMessageBirds()}</Navbar.Text>
          <Navbar.Text>Bird Species Spotted: {this.toggleMessageSpecies()}</Navbar.Text>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Footer;
