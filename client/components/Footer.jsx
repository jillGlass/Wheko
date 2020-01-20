import React from "react";
import { Navbar, Text } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <>
        <Navbar
          fixed="bottom"
          className="justify-content-center backgroundColor fontMedium"
        >
          <Navbar.Text>Total Birds Spotted:</Navbar.Text>
          <Navbar.Text>Types of Birds Spotted:</Navbar.Text>
        </Navbar>
      </>
    );
  }
}

export default Footer;
