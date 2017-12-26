import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './containers/LandingPage'
import SearchResultLayout from './containers/SearchResultLayout';
import './index.css';

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
