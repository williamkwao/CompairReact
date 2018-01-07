import React from 'react';

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
                        <a href="#" className="brand-logo">
                            <img id="logo-img" src={logoimage} /> compair </a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Login</a>
                            </li>
                            <li>
                                <a href="#">Cart</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }

}

export default NavBar;