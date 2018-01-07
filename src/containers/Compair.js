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
import * as SearchActionCreators from '../actions/search';
import * as ApiProperties from '../properties/api-properties';

class PrimaryLayout extends React.Component {
    render() {
        return (
            <div className="canvas">
                <NavBar />
                <Route
                    path="/" exact
                    component={(props) => (
                        <LandingPage
                            searchState={this.props.searchState}
                            getSearchResults={this.props.getSearchResults}
                            {...props}
                        />
                    )}
                />
                <Route
                    path="/search/:item?"
                    component={(props) => (
                        <SearchResultLayout
                            searchState={this.props.searchState}
                            getSearchResults={this.props.getSearchResults}
                            {...props}
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
        jsonp(ApiProperties.WMT_API + searchTerm, null, function (err, data) {
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