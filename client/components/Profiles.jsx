import React from "react";
import { Row, Col } from "react-bootstrap";
import fetch from "../api/birds";
import foundNumber from "../api/foundNumber";


class Profiles extends React.Component {
  state = {
    birds: []
  };

  handleClick(id) {
    foundNumber(id)
    this.componentDidMount()
  }

  componentDidMount() {
    fetch().then(birds => {
      this.setState({
        birds
      });
    });
  }

  render() {
    const { id } = this.props.match.params;
    const bird = this.state.birds.find(bird => bird.bird_id === Number(id));
    return this.state.birds.length === 0 ? null : (
//bird.number etc to return bird info
      <React.Fragment>
        <div className="container">
        <div className="row">
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-3"></div>
          </div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-3"></div>
          </div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-3"></div>
          </div>
         
        </div>
      </React.Fragment>
    );
  }
}

export default Profiles;