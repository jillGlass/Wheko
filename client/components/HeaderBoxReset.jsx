import React from "react";
import { Button } from "react-bootstrap";
import reset from '../api/reset'




class HeaderBoxReset extends React.Component {

  

  // this component works if rendered on page by itself. something is stopping it in a parent component

 handleClickReset = () => {
   console.log('reset hit')
 }

  

  render() {
    return (
      <React.Fragment>
        <Button
          onClick={this.handleClickReset}
          className="button-width resetBtn"
          variant="outline-secondary"
        >
          Reset
        </Button>
      </React.Fragment>
    );
  }
}

export default HeaderBoxReset;