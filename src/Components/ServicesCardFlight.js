import React, { Component } from 'react';
import '../Style/ServicesCardFlight.css';
import group2 from '../Images/Group51.png';
class ServicesCardFlight extends Component{
    render(){
        return(
                <div className='grpf'>
                <img src={group2} align='center' className='Flight' alt="Weather"/>
                <div className='headline2'>Best Flights</div>
                <div className='text2'>Engrossed listening. Park gate sell they west hard for the.</div>
                </div>
        );
    }
}
export default ServicesCardFlight;