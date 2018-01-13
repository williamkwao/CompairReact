import React from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import jsonp from 'jsonp';
import NavBar from '../components/NavBar';
import LandingPage from './LandingPage'
import notFound from '../components/notFound'
import SearchResultLayout from './SearchResultLayout';
import * as SearchActionCreators from '../actions/search';
import * as ApiProperties from '../properties/api-properties';

class Compair extends React.Component {
    static propTypes = {
        searhState: PropTypes.object
    }

    fetchAndUpdate = (searchTerm) => {
        const { dispatch} = this.props;
        const getSearchResults = bindActionCreators(SearchActionCreators.getSearchResults, dispatch);
        jsonp(ApiProperties.WMT_API + searchTerm, null, function (err, data) {
            if (err) {
                console.error(err.message);
            } 
            else {
                console.log(data);
                if (data.totalResults > 0){
                    getSearchResults(searchTerm, data.items);
                }else{
                    getSearchResults(searchTerm, []); 
                }
                
            }
        });
    }

    render() {
        const { dispatch, searchState } = this.props;

        return (
            <BrowserRouter>
                <PrimaryLayout searchState={searchState} getSearchResults={this.fetchAndUpdate} />
            </BrowserRouter>
        )
    }
}


class PrimaryLayout extends React.Component {
    render() {
        let canvasstyle = "canvas";
        if (window.location.pathname.startsWith("/search")) {
            canvasstyle += " searchcanvas";
            //searchcanvas = { "backgroundImage": "none" };
        }
        return (
            <div className= {canvasstyle}>
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



const mapStateToProps = state => (
    {
        searchState: state
    }
)

export default connect(mapStateToProps)(Compair);