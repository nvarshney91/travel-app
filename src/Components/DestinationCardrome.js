import React, { Component } from 'react';
import '../Style/DestinationCard.css';
import navi from '../Images/navi.svg';
class DestinationCardrome extends Component{
    render(){
        return(
            <div className='DestinationCardplace'>
                <div className='place'>Rome, Italy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$5.42k</div>
                <div className='navi'>
                    <img src={navi} alt='navigation'/>
                    &nbsp;&nbsp;
                    12 Days Trip
                </div>
            </div>
        );
    }
}
export default DestinationCardrome;