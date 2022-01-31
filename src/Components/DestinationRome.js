import React, { Component } from 'react';
import '../Style/DestinationCard.css';
import rome from '../Images/rome.png';
import DestinationCardrome from './DestinationCardrome';
class DestinationRome extends Component{
    render(){
        return(
            <div className='DestinationPlace'>
                <DestinationCardrome />
                <img src={rome} className='rome' alt='rome'/>
            </div>
        );
    }
}
export default DestinationRome;