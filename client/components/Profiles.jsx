import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import fetch from "../api/birds";
import foundNumber from "../api/foundNumber";
import foundNumberMinus from "../api/foundNumberMinus";
import Link from "react-router-dom";

class Profiles extends React.Component {
  state = {
    birds: []
  };
​
  handleClickPlus(id) {
    console.log('clicked')
    foundNumber(id,value=> value ? this.componentDidMount(): console.log('error'));
    
  }
​
  handleClickMinus(id) {
    foundNumberMinus(id,value=> value ? this.componentDidMount(): console.log('error'));
    
  }
​
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
            <div className="col-2"> </div>
            <div className="col-8 bird-copy-centre">
              <a href="/">
                <img
                  src="backArrow.png"
                  height="50"
                  className="arrow-placement"
                />
              </a>
              <img src="tui.jpg" height="450" width="auto" />
            </div>
            <div className="col-2"></div>
          </div>
          <div className="row white-background ">
            <div className="col-2"></div>
            <div className="col-2"></div>
            <div className="col-4 bird-copy-centre">
              <div className="row vertical-centre">
                <div className="col-4 binoc-minus">
                  <img
                    src="binocMinus.png"
                    height="40"
                    onClick={() => this.handleClickMinus(id)}
                  ></img>
                </div>
                <div className="col-4 profile-number bird-copy-centre">
                  {bird.number}
                </div>
                <div className="col-4 binoc-plus">
                  <img
                    src="binocPlus.png"
                    height="40"
                    onClick={() => this.handleClickPlus(id)}
                  ></img>
                </div>
              </div>
              <div className="row profile-name bird-copy-centre profile-name">
                {bird.name}
              </div>
              <div className="row bird-copy-centre latin-header">
                Other Latinus Namus
              </div>
              <div className="row bird-copy-centre music-note">
                <img src="note222.png" height="25" />
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-10">{bird.info}</div>
                <div className="col-1"></div>
              </div>
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
