import React from "react";
import { Container, Row,  } from "react-bootstrap";
import BirdCard from "./BirdCard";

class Grid extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row >
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

// <div className='gridWrapUpper'>
//           <Grid className='gridWrap' columns={2} doubling>
//             {this.props.birds.map(bird =>
//               <BirdCircle key={bird.name} {...bird} />
//             )
//             }
//           </Grid>
//         </div>
