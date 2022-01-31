import React, { Component } from 'react';
import '../Style/ServicesCard.css';
import ServicesCardCustom from './ServicesCardCustom';
import ServicesCardEvent from './ServicesCardEvent';
import ServicesCardFlight from './ServicesCardFlight';
import ServicesCardWeather from './ServicesCardWeather';
class ServicesCard extends Component{
    render(){
        return(
            <div className='ServicesCard'>
                <ServicesCardWeather />
                <ServicesCardFlight />
                <ServicesCardEvent />
                <ServicesCardCustom />
            </div>
        );
    }
}
export default ServicesCard;