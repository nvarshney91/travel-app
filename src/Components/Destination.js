import React, { Component } from 'react';
import '../Style/Destination.css';
import roll from '../Images/roll.svg';
import DestinationCard from './DestinationCard';
import DestinationText from './DestinationText';
class Destination extends Component{
    render(){
        return(
            <div className='Destination'>
                <DestinationText />
                <img src={roll} className='roll' alt='roll'/>
                <DestinationCard />
            </div>
        );
    }
}
export default Destination;