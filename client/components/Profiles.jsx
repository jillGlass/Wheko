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
        <div className="container-fluid ">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8 bird-copy-centre">
              <img src="tui.jpg" height="450" width="auto" />
            </div>
            <div className="col-2"></div>
          </div>
          <div className="row white-background ">
            <div className="col-2"></div>
            <div className="col-2"></div>
            <div className="col-4 bird-copy-centre">
              <div className="row bird-copy-centre profile-number">{bird.number}</div>
              <div className="row profile-name bird-copy-centre profile-name">
                {bird.name}
              </div>
              <div className="row bird-copy-centre latin-header">Other Latinus Namus</div>
              <div className="row bird-copy-centre music-note">
                <img src="note222.png" height='25' />
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
