import React, { Component } from 'react';
import '../Style/Book.css';
import reach from '../Images/Group 12.svg';
class BookReach extends Component{
    render(){
        return(
            <div className='Reach'>
                <img src={reach} alt='reach'/>
                         <div className='choosehead'>
                             <div className='chooseheadhead'>Reach Airport on Selected Date</div>
                             <div className='chooseheadtext'>Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</div>
                         </div>
            </div>
        );
    }
}
export default BookReach;