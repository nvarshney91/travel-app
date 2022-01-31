import React, { Component } from 'react';
import '../Style/Footer.css';
class FooterContact extends Component{
    render(){
        return(
            <div className='FooterCompany'>
                <div className='FootCompHead'>Contact</div>
                <div className='FootCompHeadA'>Help/FAQ</div>
                <div className='FootCompHeadA'>Press</div>
                <div className='FootCompHeadA'>Affilates</div>
            </div>
        );
    }
}
export default FooterContact;