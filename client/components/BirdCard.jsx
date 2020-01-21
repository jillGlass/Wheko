  
import React from 'react'
import { Link } from 'react-router-dom'

class BirdCircle extends React.Component {
  render () {
    const { bird_id, name, image, found } = this.props
    return (
      <React.Fragment>
        <div className='wrapperBirds'>
          <div className='birdContainer'>
            <Link to={`/profile/${bird_id}`}>
              <div className="circleImage"><img className={ found ? "circleImageFound" : "circleImage"} src={ image }></img></div>
            </Link>
            <div className='circleTitle'>{ name }</div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BirdCircle