import React, { Component } from 'react';
import '../Style/DestinationCard.css';
import navi from '../Images/navi.svg';
class DestinationCardlondon extends Component{
    render(){
        return(
            <div className='DestinationCardplace'>
                <div className='place'>London, UK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$4.2k</div>
                <div className='navi'>
                    <img src={navi} alt='navigation'/>
                    &nbsp;&nbsp;
                    12 Days Trip
                </div>
            </div>
        );
    }
}
export default DestinationCardlondon;