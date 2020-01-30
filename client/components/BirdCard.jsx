import React from "react";
import { Card, Body, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class BirdCard extends React.Component {
  render() {
    const { bird_id, name, image, found, foundNumber } = this.props;
    return (
      <React.Fragment>
        <Card style={{ width: "8rem", margin: '12px', border:'none', borderRadius: '0px'}}>
            <Card.Img style={{borderRadius: '0px', borderTopLeftRadius: '0px', borderTopRightRadius: '0px'}} variant="top" src="tui.jpg" />
            <Card.Body style={{ padding: '5px' }}>
              <Card.Title className='text-center' style={{ margin: '0px' }}>{name}</Card.Title>
            </Card.Body>
            <ListGroup  className="text-center">
              <ListGroupItem style={{padding: '0px', border: 'none' }}>Spotted: {foundNumber}</ListGroupItem>
            </ListGroup>
            <ListGroup className="text-center">
              <Link style={{ padding: '5px' }} className="birdInfoText" to={`/profile/${bird_id}`}>Information</Link>
            </ListGroup>
        </Card>
      </React.Fragment>
    );
  }
}


export default BirdCard;

