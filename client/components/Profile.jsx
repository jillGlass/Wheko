import React from "react";
import { Card, Body, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import fetch from '../api/birds'
// import Link from 'react-router-dom'

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
        <Card style={{width: 'auto', height: '100'}}>
            <Card.Img style={{borderRadius: '0px', borderTopLeftRadius: '0px', borderTopRightRadius: '0px'}} variant="top" src="tui.jpg" />
            <Card.Body style={{ padding: '5px' }}>
            <Card.Title className='text-center' style={{ margin: '10px' }}>{bird.name}</Card.Title>
            <ListGroup  className="text-center" style={{padding:'0px 20px 10px 20px'}}>
              <ListGroupItem style={{padding: '0px', border: 'none' }}>{bird.info} </ListGroupItem>
              <ListGroupItem style={{padding: '10px', border: 'none', color: 'blue' }}>Status: {bird.status} </ListGroupItem>
            </ListGroup>
            </Card.Body>
            {/* <Link href={'/'}></Link> */}
            <Button variant="warning">Found: {bird.found}</Button>
            <Button variant="primary">Back</Button>
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