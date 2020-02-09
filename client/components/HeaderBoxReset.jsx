import React from "react";
import { Button } from "react-bootstrap";

class HeaderBoxReset extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Button className='button-width' variant="outline-secondary">Reset</Button>
      </React.Fragment>
    );
  }
}

export default HeaderBoxReset;