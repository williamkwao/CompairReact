import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        let logoimage = "/img/compairlogo.png";
        if (window.location.pathname.startsWith("/search")) {
            logoimage = "/img/compairlogoblack.svg";
        }
        return (
            <div className="row">
                <nav className="nav-top nav-text">
                    <div className="nav-wrapper">
                        <Link  className="brand-logo" to= "/">  
                            <img id="logo-img" alt = "" src={logoimage} /> compair 
                         </Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                                <a href="https://github.com/BlackPanthers/">About</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }

}

export default NavBar;