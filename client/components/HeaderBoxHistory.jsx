import React from "react";
import { Button } from "react-bootstrap";

class HeaderBoxHistory extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Button className='button-width button-style' variant="outline-secondary">History</Button>
      </React.Fragment>
    );
  }
}

export default HeaderBoxHistory;
