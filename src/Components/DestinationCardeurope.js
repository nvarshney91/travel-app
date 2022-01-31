import React, { Component } from 'react';
import '../Style/DestinationCard.css';
import navi from '../Images/navi.svg';
class DestinationCardeurope extends Component{
    render(){
        return(
            <div className='DestinationCardplace'>
                <div className='place'>Full Europe&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$15k</div>
                <div className='navi'>
                    <img src={navi} alt='navigation'/>
                    &nbsp;&nbsp;
                    28 Days Trip
                </div>
            </div>
        );
    }
}
export default DestinationCardeurope;