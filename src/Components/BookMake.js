import React, { Component } from 'react';
import '../Style/Book.css';
import make from '../Images/Group 11.svg';
class BookMake extends Component{
    render(){
        return(
            <div className='Make'>
                <img src={make} alt='make'/>
                         <div className='choosehead'>
                             <div className='chooseheadhead'>Make Payment</div>
                             <div className='chooseheadtext'>Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</div>
                         </div>
            </div>
        );
    }
}
export default BookMake;