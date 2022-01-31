import React, { Component } from 'react';
import '../Style/Footer.css';
import FooterCompany from './FooterCompany';
import FooterContact from './FooterContact';
import FooterMore from './FooterMore';
import FooterRef from './FooterRef';
class Footer extends Component{
    render(){
        return(
            <div className='Footer'>
                <div className='Footer-logo'>
                    <div className='Footerlogohead'>Jadoo.</div>
                    <div className='Footerlogotext'>Book your trip in minute, get full Control for much longer. </div>
                </div>
                <div className='FooterMo'>
                    <FooterCompany />
                    <FooterContact />
                    <FooterMore />
                </div>
                <FooterRef />
            </div>
        );
    }
}
export default Footer;