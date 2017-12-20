import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Card from './components/Card';
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
                <Card />

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
