import React from "react";
import { Card, Body, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

class BirdCard extends React.Component {
  render() {
    const { bird_id, name, image, found, foundNumber, number } = this.props;
    return (
      <React.Fragment>
        <Card style={{ width: "9rem", margin: '12px', border:'none', borderRadius: '0px'}} className="bg-dark text-white">
          <Card.Img src="tui.jpg" alt="Bird image" />
          <Card.ImgOverlay>
            <Card.Title>{name}</Card.Title>

            <Card.Text>{number}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </React.Fragment>
    );
  }
}

export default BirdCard;
