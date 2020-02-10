import React from "react";
import { Card, Body, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardOverlay from "./CardOverlay";

class BirdCard extends React.Component {
  render() {
    const { bird_id, name, image, found, foundNumber, number } = this.props;
    return (
      <React.Fragment>
        <Link to={`/profile/${bird_id}`}>
          <Card
            style={{
              width: "160px",
              margin: "12px",
              border: "none",
              borderRadius: "0px"
            }}
            className="bg-dark text-white"
          >
            <Card.Img src="tui.jpg" alt="Bird image" />

            <Card.ImgOverlay>
              <Card.Title className="text-center zero-margin font-card">
                {name}
              </Card.Title>

              <CardOverlay number={this.props.number} />
            </Card.ImgOverlay>
          </Card>
        </Link>
      </React.Fragment>
    );
  }
}

export default BirdCard;
