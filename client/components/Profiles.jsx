import React from "react";
import { Row, Col } from "react-bootstrap";
import fetch from "../api/birds";
import foundNumber from "../api/foundNumber";

class Profiles extends React.Component {
  state = {
    birds: []
  };

  handleClick(id) {
    foundNumber(id);
    this.componentDidMount();
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
        <div className="container ">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <img src="tui.jpg" height="600px" />
            </div>
            <div className="col-2"></div>
          </div>
          <div className="row white-background ">
            <div className="col-2"></div>
            <div className="col-2"></div>
            <div className="col-4 bird-copy-centre">
              <div className="row profile-number bird-copy-centre">{bird.number}</div>
              <div className="row profile-name bird-copy-centre">{bird.name}</div>
              <div className="row bird-copy-centre">Latin</div>
              <div className="row bird-copy-centre">
                <img src="noteturq.png" />
              </div>
              <div className="row">{bird.info}</div>
            </div>
            <div className="col-2"></div>
            <div className="col-2"></div>
          </div>
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Profiles;
