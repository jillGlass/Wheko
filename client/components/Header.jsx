import React from "react";
import { Navbar, Text, Container } from 'react-bootstrap'



class Header extends React.Component {
 

render() {
    return (
      <>
      
        <Navbar
          fixed="top"
          className="justify-content-center backgroundColor"
        >
          <Container style={{flexDirection: 'column', margin: '0px', padding: '0px'}}>
          <Navbar.Text className="fontLarge" style={{padding: '0px', MarginBottom: '0px'}}>Wheko</Navbar.Text>
          <Navbar.Text className="justify-content-end" style={{ padding: "0px" }}>
            Total Birds Spotted: {this.props.foundNumber}
          </Navbar.Text>
          <Navbar.Text className="justify-content-end" style={{ padding: "0px" }}>
            Bird Species Spotted: {this.props.found}
          </Navbar.Text>
          </Container>
        </Navbar>
        
      </>
    );
  }
}

export default Header;
