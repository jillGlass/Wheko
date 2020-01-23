import React from "react";
import { Card, Body, ListGroup, ListGroupItem } from 'react-bootstrap'

class BirdCard extends React.Component {
  render() {
    const { bird_id, name, image, found } = this.props;
    return (
      <React.Fragment>
        <Card style={{ width: "8rem", margin: '12px', border:'none', borderRadius: '0px'}}>
            <Card.Img style={{borderRadius: '0px', borderTopLeftRadius: '0px', borderTopRightRadius: '0px'}} variant="top" src="tui.jpg" />
            <Card.Body style={{ padding: '5px' }}>
              <Card.Title className='text-center' style={{ margin: '0px' }}>{name}</Card.Title>
            </Card.Body>
            <ListGroup  className="text-center">
              <ListGroupItem style={{padding: '0px', border: 'none' }}>Spotted: </ListGroupItem>
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
