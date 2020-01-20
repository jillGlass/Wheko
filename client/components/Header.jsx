import React, { Component } from "react";
import { Navbar, Text } from "react-bootstrap";

export class Header extends Component {
  render() {
    return (
      <>
        <Navbar className="justify-content-center backgroundColor fontLarge">
          <Navbar.Text>Wheko</Navbar.Text>
        </Navbar>
      </>
    );
  }
}

export default Header;
