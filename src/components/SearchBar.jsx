import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div id="seach-bar" className="input-field col s6 m4 l4">
                <input placeholder="Find the best price ..." id="search" type="search" className="validate" />
            </div>
        );
    };
}

export default SearchBar;