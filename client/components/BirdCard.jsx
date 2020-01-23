import React from "react";
import { Card, Body, ListGroup, ListGroupItem } from 'react-bootstrap'

class BirdCard extends React.Component {
  render() {
    const { bird_id, name, image, found } = this.props;
    return (
      <React.Fragment>
        <Card bg="warning" style={{ width: "10rem", padding: '10px' }}>
            <Card.Img variant="top" src="tui.jpg" />
            <Card.Body style={{ padding: '5px' }}>
              <Card.Title className='text-center' style={{ margin: '0px' }}>{name}</Card.Title>
            </Card.Body>
            <ListGroup className="text-center">
              <ListGroupItem>Spotted: </ListGroupItem>
            </ListGroup>
            <ListGroup className="text-center">
              <Card.Link style={{ padding: '5px' }} className="birdInfoText" href="/profile/${bird_id}`">Information</Card.Link>
            </ListGroup>
        </Card>
      </React.Fragment>
    );
  }
}

export default BirdCard;

{
  /* <div className='wrapperBirds'>
<div className='birdContainer'>
  <Link to={`/profile/${bird_id}`}>
    <div className="circleImage"><img className={ found ? "circleImageFound" : "circleImage"} src={ image }></img></div>
  </Link>
  <div className='circleTitle'>{ name }</div>
</div>
</div> */
}
