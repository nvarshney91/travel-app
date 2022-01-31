import React, { Component } from 'react';
import decore from '../Images/Decore.svg';
import ellipse from '../Images/ellipse.svg';
import logo from '../Images/Logo.svg';
import traveller from '../Images/Traveller.svg';
import '../Style/Hero.css';
import Description from './Description';
import Navbar from './Navbar';
import decore1 from '../Images/Decore01.svg';
class Hero extends Component{
    render(){
        return(
         <div>
             <img src={ellipse} className='ellipse' alt='ellipse'/>
             <img src={decore}  className='Decore' alt='Decore'/>
             <div className='Navbar'>
             <img src={logo} className='logo' alt='logo'/>
             <Navbar/>
             </div>
             <img src={decore1} className='decore1' alt='decore1'/>
             <Description/>
             <img src={traveller} className='traveller' alt='traveller'/>
         </div>
        );
    }
}
export default Hero;