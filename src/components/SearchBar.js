import React, { Component } from 'react';


export default class SearchBar extends Component {
    
    state = {
        searchTerm: '',
    };

    onSearchChange = (e) => {
        const search = e.target.value;
        this.setState({ searchTerm: search });
        //console.log(this.state.searchTerm);
        
    };

    onSearchSubmit = (e) => {
        if (e) e.preventDefault();
        if (e) e.stopPropagation();
        const search = e.target.value;
        this.props.onSearchSubmit(this.state.searchTerm);
        //this.setState({ searchTerm: '' });
        console.log(this.state.searchTerm);
    }

    render() {

        return (
            <div id="seach-bar" className="input-field col s6 m4 l4">
                <form onSubmit={this.onSearchSubmit}>
                    <input
                        placeholder="Find the best price ..."
                        id="search" type="search"
                        className="validate"
                        onChange={this.onSearchChange}
                        value={this.state.searchTerm}
                    />
                </form>
            </div>
        );
    };
}
