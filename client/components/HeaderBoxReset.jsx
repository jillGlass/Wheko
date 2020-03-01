import React from "react";
import { Button } from "react-bootstrap";

function handleClick () {
  reset()
}

class HeaderBoxReset extends React.Component {

  
  render() {
    return (
      <React.Fragment>
        <Button className='button-width' variant="outline-secondary" onClick={() => handleClick()}>Reset</Button>
      </React.Fragment>
    );
  }
}

export default HeaderBoxReset;