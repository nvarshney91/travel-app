import React, { Component } from 'react';
import '../Style/Footer.css';
class FooterMore extends Component{
    render(){
        return(
            <div className='FooterCompany'>
                <div className='FootCompHead'>More</div>
                <div className='FootCompHeadA'>AirlineFees</div>
                <div className='FootCompHeadA'>Airline</div>
                <div className='FootCompHeadA'>Low Fare Tips</div>
            </div>
        );
    }
}
export default FooterMore;