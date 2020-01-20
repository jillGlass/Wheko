import React, { Component } from "react";
import {Navbar, Brand} from 'react-bootstrap'


export class Header extends Component {
  render() {
    return (
      <>
        
  <Navbar className="justify-content-center backgroundColor">
    <Navbar.Brand>Wheko</Navbar.Brand>
  </Navbar>
  
      </>
    );
  }
}

export default Header;
