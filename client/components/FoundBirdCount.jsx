import React from 'react'
import { Button } from 'react-bootstrap'

class FoundBirdCount extends React.Component {
    render() {
        return (
           <React.Fragment>
               <div className='found-birds-btn'>{this.props.found} species</div>

           </React.Fragment> 
        )
    }
}

export default FoundBirdCount