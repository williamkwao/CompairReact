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
                <Route path="/" exact component={LandingPage} />
                <Route path="/search" exact component={SearchResultLayout} />

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
    <Compair/>,
    document.getElementById('root')
);
