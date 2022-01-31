import React, { Component } from 'react';
import '../Style/Book.css';
import BookFeature from './BookFeature';
import BookGreece from './BookGreece';
import Booktext from './Booktext';
class Book extends Component{
    render(){
        return(
            <div className='Book'>
                <div className='Booking'>
                <Booktext />
                <BookFeature />
                </div>
                <div className='greece'>
                    <BookGreece/>
                </div>
            </div>
        );
    }
}
export default Book;