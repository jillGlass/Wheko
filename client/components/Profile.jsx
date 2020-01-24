import React from "react";
import { Card, Body, ListGroup, ListGroupItem } from "react-bootstrap";

class Profile extends React.Component {
    state = {
        birds: []
      }
    
      componentDidMount () {
        fetch()
          .then(birds => {
            this.setState({
              birds
            })
          })
      }

  render() {
    const { id } = this.props.match.params
    const bird = this.state.birds.find(bird => bird.bird_id === Number(id))
    return this.state.birds.length === 0 ? null : (
      <React.Fragment>
        <Card style={{width: '20rem', margin: '20px'}}>
            <Card.Img style={{borderRadius: '0px', borderTopLeftRadius: '0px', borderTopRightRadius: '0px'}} variant="top" src="tui.jpg" />
            <Card.Body style={{ padding: '5px' }}>
            <Card.Title className='text-center' style={{ margin: '0px' }}>{bird.name}</Card.Title>
            <ListGroup  className="text-center">
              <ListGroupItem style={{padding: '0px', border: 'none' }}>{bird.info} </ListGroupItem>
              <ListGroupItem style={{padding: '0px', border: 'none' }}>{bird.status} </ListGroupItem>
              <ListGroupItem style={{padding: '0px', border: 'none' }}>{bird.found} </ListGroupItem>
            </ListGroup>

            </Card.Body>
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