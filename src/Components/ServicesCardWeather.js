import React, { Component } from 'react';
import '../Style/ServicesCardWeather.css';
import group1 from '../Images/Group-48.svg';
class ServicesCardWeather extends Component{
    render(){
        return(
                <div className='grp48'>
                <img src={group1} align='center' className='Weather' alt="Weather"/>
                <div className='headline'>Calculated Weather</div>
                <div className='text'>Built Wicket longer admire do barton vanity itself do it</div>
                </div>
        );
    }
}
export default ServicesCardWeather;