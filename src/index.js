import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Card from './components/Card';
import SearchBar from './components/SearchBar'
import './index.css';


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

class SearchResultLayout extends React.Component {
    render() {
        return (
            <div>
                <div className="container banner">
                    <SearchBar />
                </div>
                <Card/>
            </div>

        )
    }
}



class PrimaryLayout extends React.Component {
    render() {
        return (
            <div className="canvas">
                <NavBar />
                <Route path="/" exact component={LandingPage} />
                <Route path="/search" component={SearchResultLayout} />


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
