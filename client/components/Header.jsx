import React from "react";
import { Navbar, Text, Nav, Container, NavDropdown } from "react-bootstrap";
import FoundBirdCount from './FoundBirdCount'
import FoundSpeciesCount from './FoundSpeciesCount'
import HeaderBoxHistory from './HeaderBoxHistory'
import HeaderBoxReset from './HeaderBoxReset'
// import HeaderBoxDrop from "./HeaderBoxDrop";

class Header extends React.Component {

  
  
  render() {
    return (
      <>
        <Navbar className="navbar d-flex flex-md-row flex-column"  >
          <img href="#home" className="logo-nav" src="WhekoLogo.png"></img>
         

            <Nav className="mx-auto p-2">
              <Nav.Link ><FoundBirdCount number={this.props.number}/></Nav.Link>
              <Nav.Link ><FoundSpeciesCount found={this.props.found}/></Nav.Link>
            </Nav>

            <Nav className="mr p-2" style={{paddingRight:'0px'}}>
              <HeaderBoxReset />
              <HeaderBoxHistory />
            </Nav>
         
        </Navbar>
      </>
    );
  }
}

export default Header;

