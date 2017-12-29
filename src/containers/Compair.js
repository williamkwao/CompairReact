import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter, Route,Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import LandingPage from './LandingPage'
import notFound from '../components/notFound'
import SearchResultLayout from './SearchResultLayout';
import * as SearchActionCreators from '../actions/search'


class PrimaryLayout extends React.Component {
    render() {
        return (
            <div className="canvas">
                <NavBar />
                <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route
                    path="/search"
                    component={(props) => (
                        <SearchResultLayout 
                        searchState={this.props.searchState} 
                        getSearchResults= {this.props.getSearchResults}
                        />
                    )}
                />
                <Route component={notFound}/>
                </Switch>
            </div>

        );
    };
}


class Compair extends React.Component {
    static propTypes = {
        searhState: PropTypes.object
    }

    render() {
        const { dispatch, searchState } = this.props;
        const getSearchResults = bindActionCreators(SearchActionCreators.getSearchResults, dispatch);

        return (
            <BrowserRouter>
                <PrimaryLayout searchState={searchState} getSearchResults={getSearchResults} />
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