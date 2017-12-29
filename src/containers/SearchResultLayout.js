import React from 'react';
import PropTypes from 'prop-types'

import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

export default class SearchResultLayout extends React.Component {
    static propTypes = {
        searchState: PropTypes.object.isRequired,
        getSearchResults: PropTypes.func.isRequired,
    }
    render() {
        const searchResults = this.props.searchState.searchResults;

        const CardComponents = searchResults.map((item, index) => (
            <Card
                name={item.name}
                salePrice={item.salePrice}
                shortDescription={item.shortDescription}
                image={item.mediumImage}
                key={index}
            />
        ));

        return (
            <div>
                <div className="container banner">
                    <SearchBar onSearchSubmit = {this.props.getSearchResults} />
                </div>
                <div>
                    <div className="row cards">
                        {CardComponents} 
                        </div>
                </div>
            </div>

        )
    }
}