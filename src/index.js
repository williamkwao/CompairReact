import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './NavBar';
import './index.css';

class SearchBar extends React.Component {
    render() {
        return (
            <div id="seach-bar" className="input-field col s6 m4 l4">
                <input placeholder="Find the best price ..." id="search" type="search" className="validate" />
            </div>
        );
    };
}
class Cards extends React.Component {
    render() {
        return (
            <div className="row cards">
                <div className="col s12 m3 l3">
                    <div className="card item-card amz">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator item-image" src="img/iphone2.jpg" />
                        </div>
                        <div className="card-content">
                            <div className="card-title border">
                                <span className="activator item-title">Straight Talk Apple iPhone 7 32GB Prepaid Smartphone, Rose Gold.</span>
                            </div>
                            <div className="card-price">
                                <p>Price: <em>$449.00</em></p>
                            </div>
                            <div className="card-link">
                                <p><a href="#">Go to Amazon</a></p>
                            </div>
                            <div className="retail-logo">
                                <img src="img/amazonlogo.png" />
                            </div>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">More Info<i class="material-icons right">close</i></span>
                            <p>Straight Talk Apple iPhone 7 32GB Prepaid Smartphone, Rose Gold.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Banner extends React.Component {
    render() {
        return (
            <div className="container banner">
                <div className="banner-content">
                    <h1>Find and Compare</h1>
                      <SearchBar />
                </div>


            </div>
        )
    }
}
class LandingPage extends React.Component {
    render() {
        return (
            <div className="container banner">
                <div className="banner-content">
                    <h1>Find and Compare</h1>
                    <SearchBar />
                </div>
            </div>
        )
    }
}

const SearchResultLayout = () => (
    <div className="container banner">
        <SearchBar />
    </div>
)

class PrimaryLayout extends React.Component {
    render() {
        return (
            <div className="canvas">
                <NavBar />
                <Banner />
                <Cards />

            </div>

        );
    };
}


const Compair = () => (
    <BrowserRouter>
        <PrimaryLayout />
    </BrowserRouter>
)



ReactDOM.render(
    <Compair />,
    document.getElementById('root')
);
