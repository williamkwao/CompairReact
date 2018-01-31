import React from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios'
import NavBar from '../components/NavBar';
import LandingPage from './LandingPage'
import notFound from '../components/notFound'
import SearchResultLayout from './SearchResultLayout';
import * as SearchActionCreators from '../actions/search';
import * as RequestStates from '../actions/RequestStates';
import * as ApiProperties from '../properties/api-properties';



class Compair extends React.Component {
    static propTypes = {
        searchState: PropTypes.object
    }

    fetchAndUpdate = (searchTerm) => {
        const { dispatch } = this.props;
        const getSearchResults = bindActionCreators(SearchActionCreators.getSearchResults, dispatch);
        const setRequestState = bindActionCreators(SearchActionCreators.setRequestState, dispatch);
        axios.get(ApiProperties.WMT_API + searchTerm)
            .then((response) => {
                console.log(response);
                getSearchResults(searchTerm, response.data.items);
                setRequestState(RequestStates.REQUEST_COMPLETE);
                
            })
            .catch((error) => {
                console.log(error)
                getSearchResults(searchTerm, []);
               setRequestState(RequestStates.REQUEST_COMPLETE);
            });
    }
    render() {
        const { dispatch, searchState } = this.props;
        const setRequestState = bindActionCreators(SearchActionCreators.setRequestState, dispatch);
        const updateState = bindActionCreators(SearchActionCreators.getSearchResults, dispatch);
        return (
            <BrowserRouter>
                <PrimaryLayout setRequestState ={setRequestState} updateState = {updateState} searchState={searchState} getSearchResults={this.fetchAndUpdate} />
            </BrowserRouter>
        )
    }
}


class PrimaryLayout extends React.Component {
    render() {
        let canvasstyle = "canvas";
        if (window.location.pathname.startsWith("/search")) {
            canvasstyle += " searchcanvas";
        }
        return (
            <div className={canvasstyle}>
                <NavBar />
                <Switch>
                    <Route
                        path="/" exact
                        component={(props) => (
                            <LandingPage
                                searchState={this.props.searchState}
                                getSearchResults={this.props.getSearchResults}
                                setRequestState = {this.props.setRequestState}
                                updateState = {this.props.updateState}
                                {...props}
                            />
                        )}
                    />
                    <Route
                        path="/search"
                        component={(props) => (
                            <SearchResultLayout
                                updateState = {this.props.updateState}
                                searchState={this.props.searchState}
                                getSearchResults={this.props.getSearchResults}
                                setRequestState = {this.props.setRequestState}
                                {...props}
                            />
                        )}
                    />
                    <Route component={notFound} />
                </Switch>
            </div>

        );
    };
}

const mapStateToProps = state => (
    {
        searchState: state
    }
)

export default connect(mapStateToProps)(Compair);