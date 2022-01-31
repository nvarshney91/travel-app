import React, { Component } from 'react';
import "../Style/Navbar.css"
class Navbar extends Component{
    render(){
        return(
           <nav className="navbar">
               <ul>
                   <li><a>Destinations</a></li>
                   <li><a>Hotels</a></li>
                   <li><a>Flights</a></li>
                   <li><a>Booking</a></li>
                   <li><a>Login</a></li>
                   <li><a id='signup'>Sign up</a></li>
                   <li><a>Login</a></li>
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