import React, { Component } from "react";
import { Navbar, Text, Container } from "react-bootstrap";

export class Header extends Component {
  render() {
    return (
      <>
        <Navbar fixed="top" className="justify-content-center backgroundColor fontLarge headerHeight">
          <Navbar.Text>Wheko</Navbar.Text>
          <Navbar.Text style={{padding: '0px', marginTop: '15px'}}>Total Birds Spotted: {this.props.found}</Navbar.Text>
          <Navbar.Text style={{padding: '0px', marginBottom: '15px'}}>Bird Species Spotted: {this.props.found}</Navbar.Text>
          
        </Navbar>
      </>
    );
  }
}

export default Header;
