import React, { Component } from 'react';
import '../Style/DestinationCard.css';
import london from '../Images/london.png';
import DestinationCardlondon from './DestinationCardlondon';
class DestinationLondon extends Component{
    render(){
        return(
            <div className='DestinationPlace'>
                <DestinationCardlondon />
                <img src={london} className='london' alt='london'/>
            </div>
        );
    }
}
export default DestinationLondon;