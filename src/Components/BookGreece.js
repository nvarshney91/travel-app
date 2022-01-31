import React, { Component } from 'react';
import '../Style/BookGreece.css';
import greece from '../Images/greece.svg';
import options from '../Images/options.svg';
import building from '../Images/building.svg';
import like from '../Images/like.svg';
import mask from '../Images/mask.svg';
class BookGreece extends Component{
    render(){
        return(
            <div className='BookGreece'>
                    <img src={greece} className='greece-img' alt='greece' />
                    <div className='greece-text'>
                        <div className='greecehead'>Trip to Greece</div>
                        <div className='greeceheadtext'>14-29 June| by Robbin joseph</div>
                           <img src={options} className='options' alt="options"/>
                    <div className='greeceheadtext'>
                        <img src={building} className='building' alt="building"/>
                        &nbsp;&nbsp;24 people going&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={like} className='like' alt="like"/>
                    </div>
                    </div>
                    <div className='slide'>
                        <img src={mask} className='mask' alt='mask'/>
                        <div className='slide-details'>
                            <div className='on'>Ongoing</div>
                            <div className='to'>Trip to rome</div>
                            <div className='comp'><font color="#8A79DF">40%</font> <font color="#080809">completed</font></div>
                            <div class="slidecontainer">
                                <div className='pr'></div>
                                <div className='gr'></div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
export default BookGreece;