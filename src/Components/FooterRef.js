import React, { Component } from 'react';
import '../Style/Footer.css';
import fb from '../Images/fb.svg';
import insta from '../Images/insta.png';
import skype from '../Images/skype.svg';
import apple from '../Images/apple.svg';
import google from '../Images/google.svg';
class FooterRef extends Component{
    render(){
        return(
            <div className='FooterRef'>
                <div className='social'>
                <img src={fb} alt='fb'/>
                <img src={insta} alt='insta'/>
                <img src={skype} alt='skype'/>
                </div>
                <div className='FooterRef-text'>Discover our app</div>
                <div className='store'>
                <img src={google} alt='google'/>
                <img src={apple} alt='apple'/>
                </div>
            </div>
        );
    }
}
export default FooterRef;