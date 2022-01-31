import React, { Component } from 'react';
import '../Style/DestinationText.css';
class DestinationText extends Component{
    render(){
        return(
            <div className='DestinationText'>
                <div className='head'>Top Selling</div> 
                <div className='tagline'>Top Destinations</div>  
            </div>
        );
    }
}
export default DestinationText;