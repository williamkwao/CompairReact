import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import jsonp from 'jsonp';
import NavBar from '../components/NavBar';
import LandingPage from './LandingPage'
import SearchResultLayout from './SearchResultLayout';
import * as SearchActionCreators from '../actions/search'

class PrimaryLayout extends React.Component {
    render() {
        return (
            <div className="canvas">
                <NavBar />
               < Route
                    path="/" exact
                    component={(props) => (
                        <LandingPage
                            searchState={this.props.searchState}
                            getSearchResults={this.props.getSearchResults}
                        />
                    )}
                />
                <Route
                    path="/search"
                    component={(props) => (
                        <SearchResultLayout
                            searchState={this.props.searchState}
                            getSearchResults={this.props.getSearchResults}
                        />
                    )}
                />
            </div>

        );
    };
}


class Compair extends React.Component {
    static propTypes = {
        searhState: PropTypes.object
    }

    fetchAndUpdate = (searchTerm) => {
        const { dispatch, searchState } = this.props;
        const getSearchResults = bindActionCreators(SearchActionCreators.getSearchResults, dispatch);
        jsonp('http://api.walmartlabs.com/v1/search?apiKey=hfx9xrw8qm7xt6urgnxhexy6&query='+searchTerm, null, function (err, data) {
            if (err) {
                console.error(err.message);
            } else {
                console.log(data);
                getSearchResults(searchTerm, data.items);

            }
        });
    }

    render() {
        const { dispatch, searchState } = this.props;
        const getSearchResults = bindActionCreators(SearchActionCreators.getSearchResults, dispatch);

        return (
            <BrowserRouter>
                <PrimaryLayout searchState={searchState} getSearchResults={this.fetchAndUpdate} />
            </BrowserRouter>
        )
    }
}

const mapStateToProps = state => (
    {
        searchState: state
    }
)

export default connect(mapStateToProps)(Compair);