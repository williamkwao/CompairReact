import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Banner extends React.Component{
    render(){
        return(
            <div className="container banner">
                    <div className="banner-content">
                        <h1>Find and Compare</h1>
                        <div id="seach-bar" className="input-field col s6 m4 l4">
                            <input placeholder="Find the best price ..." id="search" type="search" className="validate" />
                        </div>
                    </div>

                </div>
        )
    }
}
class NavBar extends React.Component {
    render() {
        return (
            <div className="row">
                <nav className="nav-top">
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">
                            <img id="logo-img" src="img/compairlogo.png" /> compair </a>
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
class Compair extends React.Component {
    render() {
        return (
            <div className="canvas">
                <NavBar/>
                <Banner/>
            </div>

        );
    };
}


ReactDOM.render(<Compair />, document.getElementById('root'));
