import React, { Component } from 'react';
import '../Style/ServicesCardWeather.css';
import group4 from '../Images/Group49.png';
class ServicesCardCustom extends Component{
    render(){
        return(
                <div className='grp48'>
                <img src={group4} align='center' className='custom' alt="custom"/>
                <div className='headline'>Customization</div>
                <div className='text'>We deliver outsourced aviation services for military customers</div>
                </div>
        );
    }
}
export default ServicesCardCustom;