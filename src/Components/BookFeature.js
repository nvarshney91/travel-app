import React, { Component } from 'react';
import '../Style/Book.css';
import BookChoose from './BookChoose';
import BookMake from './BookMake';
import BookReach from './BookReach';
class BookFeature extends Component{
    render(){
        return(
            <div className='feature'>
                <BookChoose />
                <BookMake />
                <BookReach />
            </div>
        );
    }
}
export default BookFeature;