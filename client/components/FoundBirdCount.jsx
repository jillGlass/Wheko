import React from 'react'
import { Button } from 'react-bootstrap'

class FoundBirdCount extends React.Component {
    render() {
        return (
           <React.Fragment>
               <Button variant="primary" className='found-birds-btn'>{this.props.found}</Button>

           </React.Fragment> 
        )
    }
}

export default FoundBirdCount