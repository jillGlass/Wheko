import React from "react";
import { Container, Row,  } from "react-bootstrap";
import BirdCard from "./BirdCard";


class Grid extends React.Component {

 
  render() {
    return (
      <React.Fragment>
        <Container className= 'containerClass '>
          <Row className="d-flex justify-content-around">
            {this.props.birds.map(bird => (
              <BirdCard key={bird.name} {...bird} />
            ))}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Grid;


