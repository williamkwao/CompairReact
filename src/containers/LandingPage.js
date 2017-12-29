import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';

export default class LandingPage extends Component {
    render() {
        return (
            <div className="container banner">
                <div className="banner-content">
                    <h1>Find and Compare</h1>
                    <SearchBar  onSearchSubmit = {this.props.getSearchResults}/>
                </div>
            </div>
        )
    }
}