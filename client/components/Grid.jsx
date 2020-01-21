import React from "react";
import { Container, Col } from "react-bootstrap";
import BirdCard from "./BirdCard";

class Grid extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Col>
            {this.props.birds.map(bird => (
              <BirdCard key={bird.name} {...bird} />
            ))}
          </Col>
        </Container>
      </React.Fragment>
    );
  }
}

export default Grid;

// <div className='gridWrapUpper'>
//           <Grid className='gridWrap' columns={2} doubling>
//             {this.props.birds.map(bird =>
//               <BirdCircle key={bird.name} {...bird} />
//             )
//             }
//           </Grid>
//         </div>
