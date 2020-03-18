import React from "react";
import { Button } from "react-bootstrap";
import reset from '../api/reset'



class HeaderBoxReset extends React.Component {

  handleClickReset() {
    console.log("reset hit");
    reset() // only resets species on refresh
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