import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import fetch from "../api/birds";
import foundNumber from "../api/foundNumber";
import foundNumberMinus from "../api/foundNumberMinus";
import Footer from './Footer'

class Profiles extends React.Component {
  state = {
    birds: [],
  };

  handleClickPlus(id) {
    foundNumber(id, (value) =>
      value ? this.componentDidMount() : console.log("error")
    );
  }

  handleClickMinus(id) {
    foundNumberMinus(id, (value) =>
      value ? this.componentDidMount() : console.log("error")
    );
  }

  componentDidMount() {
    fetch().then((birds) => {
      this.setState({
        birds,
      });
    });
  }

  render() {
    const { id } = this.props.match.params;
    const bird = this.state.birds.find((bird) => bird.bird_id === Number(id));
    return this.state.birds.length === 0 ? null : (
      //bird.number etc to return bird info
      <React.Fragment>
        <div className="container-fluid width"  >
          <div className="row h-50">
            <div className="col-xl-4">
            </div>
           
            <div className="col-xl-4 bird-copy-centre">
            
              <img src="tui.jpg" height="100%" width='100%' />
             
            </div>
            <div className="col-xl-4"></div>
          </div>
          <div className="row white-background ">
            <div className="col-sm-2"></div>
            <div className="col-sm-2"> </div>
            <div className="col-sm-4 bird-copy-centre">
              <div className="row vertical-centre">
                <div className="col-4 binoc-minus">
                  <img
                    src="binocMinus.png"
                    height="40"
                    onClick={
                      bird.number === 0 ? null : () => this.handleClickMinus(id)
                    }
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
              <div className="row  bird-copy-centre profile-name">
                {bird.name}
              </div>
              <div className="row m-2 bird-copy-centre latin-header">
                Other Latinus Namus
              </div>
              <div className="row m-4 bird-copy-centre music-note">
                <img src="note222.png" height="25" />
              </div>
              <div className="row m-2 zero-margin">
                {/* <div className="col-sm-1"></div> */}
                <div className="col-sm-12">{bird.info}</div>
                {/* <div className="col-sm-1"></div> */}
              </div>
              <div className="row m-2 zero-margin">
                <div className="col-sm-1"></div>
                <div className="col-sm-10 mt-2 status-name">STATUS</div>
                <div className="col-sm-1"></div>
              </div>
              <div className="row zero-margin">
                <div className="col-sm-1"></div>
                <div className="col-sm-10 mb-2">{bird.status}</div>
                <div className="col-sm-1"></div>
              </div>
              <div className="row zero-margin">
                <div className="col-sm-1"></div>
                <div className="col-sm-10 mb-2"><a href="/">
                <img
                  src="backArrow.png"
                  height="50"
                  className="arrow-placement"
                />
              </a></div>
                <div className="col-sm-1"></div>
              </div>
            </div>
            <div className="col-sm-2"></div>
            <div className="col-sm-2"></div>
          </div>
          <div className="row">
            <div className="col-sm-12"></div>
          </div>
          <Footer />
        </div>
        
      </React.Fragment>
    );
  }
}

export default Profiles;

