import React, { Component } from 'react';
import '../Style/Book.css';
import choose from '../Images/Group 7.svg';
class BookChoose extends Component{
    render(){
        return(
            <div className='Choose'>
                <img src={choose} alt='choose'/>
                         <div className='choosehead'>
                             <div className='chooseheadhead'>Choose Destination</div>
                             <div className='chooseheadtext'>Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</div>
                         </div>
            </div>
        );
    }
}
export default BookChoose;