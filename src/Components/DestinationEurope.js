import React, { Component } from 'react';
import '../Style/DestinationCard.css';
import europe from '../Images/europe.png';
import DestinationCardeurope from './DestinationCardeurope';
class DestinationEurope extends Component{
    render(){
        return(
            <div className='DestinationPlace'>
                <DestinationCardeurope />
                <img src={europe} className='europe' alt='europe'/>
            </div>
        );
    }
}
export default DestinationEurope;