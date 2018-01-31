import React from 'react';
import PropTypes from 'prop-types'
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';
import { Route } from 'react-router-dom';
import * as RequestStates from '../actions/RequestStates';


const SearchResultLayout = (props) => {

    const onSearchSubmit = (input) => {
        props.setRequestState(RequestStates.REQUEST_IN_PROGRESS)
        props.updateState(input,[]);
        props.history.push("/search/" + input);
       
       
    }
    var getSearchResults = props.getSearchResults;
    return (
        <div>
            <div className="container banner">
                <SearchBar onSearchSubmit={onSearchSubmit} searchTerm={props.searchState.searchTerm} />
            </div>
            <div>
                <div className="row cards">
                    <Route path="/search/:item"
                        render={(routeProps) => (<Cards
                            getSearchResults={props.getSearchResults}
                            searchState={props.searchState} {...routeProps} />)} />
                </div>
            </div>
        </div>

    )
}

export default SearchResultLayout;