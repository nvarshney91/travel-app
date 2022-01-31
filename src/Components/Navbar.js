import React, { Component } from 'react';
import "../Style/Navbar.css"
class Navbar extends Component{
    render(){
        return(
           <nav className="navbar">
               <ul>
                   <li>Destinations</li>
                   <li>Hotels</li>
                   <li>Flights</li>
                   <li>Booking</li>
                   <li>Login</li>
                   <li id='signup'>Sign up</li>
                   <li>Login</li>
                   <li>
                       <select>
                           <option value="EN">EN</option>
                           <option value="HD">HD</option>
                       </select>
                    </li>
               </ul>
           </nav>
        );
    }
}
export default Navbar;