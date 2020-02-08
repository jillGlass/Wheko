import React from "react";
import { Button, NavDropdown } from "react-bootstrap";

class HeaderBoxDrop extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Button variant="outline-secondary"><NavDropdown title="A-Z" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              </NavDropdown></Button>
      </React.Fragment>
    );
  }
}

export default HeaderBoxDrop;