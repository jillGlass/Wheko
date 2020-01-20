import React, { Component } from "react";
import {Navbar, Brand} from 'react-bootstrap'


export class Header extends Component {
  render() {
    return (
      <>
        
  <Navbar className="justify-content-center" bg="light">
    <Navbar.Brand>Brand text</Navbar.Brand>
  </Navbar>
  
      </>
    );
  }
}

export default Header;
