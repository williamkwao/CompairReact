import React, {Component} from 'react';

export default class SearchBar extends Component {
    render() {
       
        return (
            <div id="seach-bar" className="input-field col s6 m4 l4">
                <input
                    placeholder="Find the best price ..."
                    id="search" type="search"
                    className="validate"
                />
            </div>
        );
    };
}

