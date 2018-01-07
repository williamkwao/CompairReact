import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';

export default class LandingPage extends Component {

    onSearchSubmit = (input) => {
        this.props.history.push("/search/" + input);
    }
    render() {
        return (
            <div className="container banner">
                <div className="banner-content">
                    <h1>Find and Compare</h1>
                    <SearchBar onSearchSubmit={this.onSearchSubmit} />
                </div>
            </div>
        )
    }
}