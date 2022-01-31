import React, { Component } from 'react';
import '../Style/Footer.css';
class FooterCompany extends Component{
    render(){
        return(
            <div className='FooterCompany'>
                <div className='FootCompHead'>Company</div>
                <div className='FootCompHeadA'>About</div>
                <div className='FootCompHeadA'>Careers</div>
                <div className='FootCompHeadA'>Mobile</div>
            </div>
        );
    }
}
export default FooterCompany;