import React, { Component } from "react";
import Nav from 'react-bootstrap'

export class Header extends Component {
  render() {
    return (
      <>
        <Nav className="justify-content-center">
          <Nav.Item style={{ fontSize: '32rem' }}>Wheko</Nav.Item>
        </Nav>
      </>
    );
  }
}

export default Header;
