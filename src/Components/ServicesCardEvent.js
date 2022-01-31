import React, { Component } from 'react';
import '../Style/ServicesCardWeather.css';
import group3 from '../Images/Group50.png';
class ServicesCardEvent extends Component{
    render(){
        return(
                <div className='grp48'>
                <img src={group3} align='center' className='event' alt="event"/>
                <div className='headline'>Local Events</div>
                <div className='text'>Barton vanity itself do in it. Preferd to  men it engrossed listening.</div>
                </div>
        );
    }
}
export default ServicesCardEvent;