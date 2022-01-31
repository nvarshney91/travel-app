import React, { Component } from 'react';
import '../Style/Description.css';
import polygon from "../Images/Polygon 1.svg";
class Description extends Component{
    render(){
        return(
            <div className='description'>
               <div className='heading'>BEST DESTINATIONS AROUND THE WORLD</div>
               <div className='textHead'>Travel, enjoy and live a new and full life</div>
               <div className='textHero'>Built Wicker longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</div>
               <div className='CTA'>
                   <button className='find'>Find out More</button>
                        <span className='but'>
                            <img src={polygon} alt='button'/>
                        </span>
                        <span className='but-text'>Play Demo</span>
               </div>
            </div>
        );
    }
}
export default Description;