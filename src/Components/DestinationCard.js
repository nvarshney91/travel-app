import React, { Component } from 'react';
import '../Style/DestinationCard.css';
import DestinationEurope from './DestinationEurope';
import DestinationLondon from './DestinationLondon';
import DestinationRome from './DestinationRome';
class DestinationCard extends Component{
    render(){
        return(
            <div className='DestinationCard'>
                <DestinationRome/>
                <DestinationLondon/>
                <DestinationEurope />
            </div>
        );
    }
}
export default DestinationCard;