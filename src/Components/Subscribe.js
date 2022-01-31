import React, { Component } from 'react';
import '../Style/Subscribe.css';
import email from '../Images/email.svg';
import subscribe from '../Images/subscribe.svg';
import rollb from '../Images/rollb.svg';
import rollu from '../Images/rollu.png';
import starsb from '../Images/starb.svg';
class Subscribe extends Component{
    render(){
        return(
            <div className='Subscribe'>
                <img src = {subscribe} className='subs-img' alt="subscribe"/>
                <img src = {rollu} className='rollu' alt="rollu"/>
                <img src = {rollb} className='rollb' alt="rollb"/>
                <div className="Subscribe-text">Subscribe to get information, latest news and other interesting offers about Cobham</div>
                <div className='eMail'>
                <div className='img-email'><img src={email} alt='email' className='Email'/></div>
                <input type='email' placeholder="Your email" id='email'></input>
                <button>Subscribe</button>
                </div>
                <img src={starsb} className='starsb' alt='starsb'/>
            </div>
        );
    }
}
export default Subscribe;