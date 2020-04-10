import React from "react";
import { Button } from "react-bootstrap";
import reset from '../api/reset'




class HeaderBoxReset extends React.Component {

  

  // this component works if rendered on page by itself. something is stopping it in a parent component

  render() {
    return (
      <React.Fragment>
        <Button
          onClick={() => this.props.onClick()}
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