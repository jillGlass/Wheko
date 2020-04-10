import React from "react";
import { Navbar, Text, Nav, Container, NavDropdown } from "react-bootstrap";
import FoundBirdCount from './FoundBirdCount'
import FoundSpeciesCount from './FoundSpeciesCount'
import HeaderBoxHistory from './HeaderBoxHistory'
import HeaderBoxReset from './HeaderBoxReset'
// import HeaderBoxDrop from "./HeaderBoxDrop";

class Header extends React.Component {

  handleClick =() => {
    console.log('poooo')
  }
  
  render() {
    return (
      <>
        <Navbar className="navbar d-flex flex-md-row flex-column"  >
          

            <Nav className="p-2 flex-nowrap">
            <img href="#home" className="logo-nav ml" src="WhekoLogo.png"></img>
              <Nav.Link className="mx-auto"><FoundBirdCount number={this.props.number}/></Nav.Link>
              <Nav.Link className="mx-auto"><FoundSpeciesCount found={this.props.found}/></Nav.Link>
            </Nav>

            <Nav className="mr p-4">
              
            </Nav>
         
        </Navbar>
      </>
    );
  }
  
}

export default Header;

