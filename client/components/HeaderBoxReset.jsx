import React from "react";
import { Button } from "react-bootstrap";
import reset from '../api/reset'



class HeaderBoxReset extends React.Component {
  handleClick () {
    reset()
  }
  
  render() {
    return (
      <React.Fragment>
        <Button className='button-width' variant="outline-secondary" onClick={() => this.handleClick()}>Reset</Button>
      </React.Fragment>
    );
  }
}

export default HeaderBoxReset;