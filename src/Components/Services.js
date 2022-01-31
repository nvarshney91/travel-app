import React, { Component } from 'react';
import '../Style/Services.css';
import ServicesCard from './ServicesCard';
import ServicesText from './ServicesText';
import art from '../Images/art.svg';
import staru from '../Images/staru.svg';
class Services extends Component{
    render(){
        return(
            <div className='Services'>
                <img src={art} className='art' alt='art'/>
                <img src={staru} className='staru' alt='staru'/>
                <ServicesText/>
                <ServicesCard/>
            </div>
        );
    }
}
export default Services;