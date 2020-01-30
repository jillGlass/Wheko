import React from "react";
import {
  Card,
  Body,
  ListGroup,
  ListGroupItem,
  Button,
  Container,
  ButtonToolbar
} from "react-bootstrap";
import fetch from "../api/birds";
import foundNumber from '../api/foundNumber'

class Profile extends React.Component {
  
  state = {
    birds: []
    
  };

  componentDidMount() {
    fetch().then(birds => {
      this.setState({
        birds
      });
    });
   
  }


  handleClick = id => {
    foundNumber(id)
  };

  render() {
    const { id } = this.props.match.params;
    const bird = this.state.birds.find(bird => bird.bird_id === Number(id));
    return this.state.birds.length === 0 ? null : (
      <React.Fragment>
        <Card className="text-center" style={{ width: "auto", height: "100" }}>
          <Card.Img
            style={{
              borderRadius: "0px",
              borderTopLeftRadius: "0px",
              borderTopRightRadius: "0px",
              height: "40%"
            }}
            variant="top"
            src="tui.jpg"
          />
          <Card.Body style={{ padding: "5px" }}>
            <Card.Title className="text-center" style={{ margin: "10px" }}>
              {bird.name}
            </Card.Title>
            <ListGroup
              className="text-center"
              style={{ padding: "0px 20px 10px 20px" }}
            >
              <ListGroupItem
                className="cardText"
                style={{ padding: "0px", border: "none" }}
              >
                {bird.info}{" "}
              </ListGroupItem>
              <ListGroupItem
                style={{ padding: "10px", border: "none", color: "blue" }}
              >
                Status: {bird.status}{" "}
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
          <Container className="text-center">
            <Container className="text-center">
              <Button
                size="lg"
                variant="warning"
                style={{ width: "20rem" }}
                onClick={() => this.handleClick(id)}
              >
                Found: {bird.foundNumber }{console.log(bird.foundNumber)}
              </Button>
            </Container>
            <Container className="text-center">
              <Button
                href={"/"}
                size="lg"
                variant="primary"
                style={{ width: "20rem" }}
              >
                Back
              </Button>
            </Container>
          </Container>
        </Card>
      </React.Fragment>
    );
  }
}

export default Profile;

/*
const { id } = this.props.match.params
    const bird = this.state.birds.find(bird => bird.bird_id === Number(id))
    return this.state.birds.length === 0 ? null : <React.Fragment>
      <ScrollToTop />
      <Segment vertical >
        <Grid container stackable className='birdProfileWrapper' >
          <Grid.Column>
            <Grid.Row>
              <BirdHeader />
              <div>
                <img src={bird.image} alt={bird.name} width="412px" height="auto"/>
              </div>
              <BirdProfileTitle name={bird.name}/>
              <Link to={this.toggleLink(bird)}>
                <Button onClick= {() => this.handleClick(id)} style = {{ marginBottom: '10px' }} size='big' className={this.toggleColor(bird)}>{this.togglePokai(bird)}</Button>
              </Link>
              <Link to={`/profile/${id}/info`}>
                <BirdInfoBtn />
              </Link>
              <Link to="/">
                <BackBtn />
              </Link>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Segment>
    </React.Fragment>
    */
