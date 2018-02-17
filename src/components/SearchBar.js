import React, { Component } from 'react';


export default class SearchBar extends Component {

    state = {
        searchTerm: this.props.searchTerm
    };

    onSearchChange = (e) => {
        const search = e.target.value;
        this.setState({ searchTerm: search });
    };

    onSearchSubmit = (e) => {
        console.log(this.state.searchTerm)
        if (e) e.preventDefault();
        if (this.state.searchTerm) {
            this.props.onSearchSubmit(this.state.searchTerm);
            console.log(this.state.searchTerm);
        }
    }
   
    render() {

        return (
            <div id="seach-bar" className="input-field col s12 m4 l4">
                <form id = "search" onSubmit={this.onSearchSubmit}>
                    
                    <input
                        placeholder="Find the best price ..."
                        type="search"
                        className="validate"
                        onChange={this.onSearchChange}
                        value={this.state.searchTerm}
                    />
                    <input 
                     className="search-button" 
                     type="submit"
                     value= 'Search'
                     form = "search"
                     />            
                </form>
            </div>
        );
    };
}
