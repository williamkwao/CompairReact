import React from 'react';
import PropTypes from 'prop-types'
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';
import { Route } from 'react-router-dom';

export default class SearchResultLayout extends React.Component {
    static propTypes = {
        searchState: PropTypes.object.isRequired,
        getSearchResults: PropTypes.func.isRequired,
    }

    onSearchSubmit = (input) => {
        this.props.history.push("/search/" + input);
    }

    render() {
        return (
            <div>
                <div className="container banner">
                    <SearchBar onSearchSubmit={this.onSearchSubmit} searchTerm={this.props.searchState.searchTerm} />
                </div>
                <div>
                    <div className="row cards">
                        <Route path="/search/:item"
                            render={(props) => (<Cards
                                getSearchResults={this.props.getSearchResults}
                                searchState={this.props.searchState} {...props} />)} />
                    </div>
                </div>
            </div>

        )
    }
}