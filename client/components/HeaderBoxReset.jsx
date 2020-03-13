import React from "react";
import { Button } from "react-bootstrap";
import reset from '../api/reset'



class HeaderBoxReset extends React.Component {

  handleClickReset () {
    console.log('reset hit')
    reset()
  }

  
  
  render() {
    return (
      <React.Fragment>
        <Button className='button-width resetBtn' variant="outline-secondary" onClick={() => this.handleClickReset()}>Reset</Button>
      </React.Fragment>
    );
  }
}

export default HeaderBoxReset;