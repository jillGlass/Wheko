import React from "react";
import { Navbar, Text, Nav, Container, NavDropdown } from "react-bootstrap";
import FoundBirdCount from './FoundBirdCount'
import FoundSpeciesCount from './FoundSpeciesCount'
import HeaderBoxHistory from './HeaderBoxHistory'
import HeaderBoxReset from './HeaderBoxReset'

class Header extends React.Component {

  // use reduce to get total birds count to feed to FoundBirdCount component
  
  render() {
    return (
      <>
        <Navbar className="navbar"collapseOnSelect expand="lg">
          <img href="#home" className="logo-nav" src="WhekoLogo.png"></img>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#features"><FoundBirdCount found={this.props.found}/></Nav.Link>
              <Nav.Link href="#pricing"><FoundSpeciesCount found={this.props.found}/></Nav.Link>
            </Nav>
            <Nav className="mr-auto">
              <Nav.Link href="#features"><HeaderBoxReset /></Nav.Link>
              <Nav.Link href="#pricing"><HeaderBoxHistory /></Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
