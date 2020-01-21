import React from "react";
import { Navbar, Text, Container } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <>
        <Navbar
          fixed="bottom"
          className="justify-content-center backgroundColor fontMedium"
        >
          <Container style={{flexDirection: 'column'}}>
          <Navbar.Text>Total Birds Spotted:</Navbar.Text>
          <Navbar.Text>Bird Species Spotted:</Navbar.Text>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Footer;
