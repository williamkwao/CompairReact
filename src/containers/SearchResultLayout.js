import React from 'react';
import PropTypes from 'prop-types'

import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

export default class SearchResultLayout extends React.Component {
    static propTypes = {
        searchState: PropTypes.object.isRequired,
        getSearchResults: PropTypes.func.isRequired,
    }
    componentDidMount = () => {
        let item = this.props.match.params.item;
        if (this.props.searchState.searchTerm != item && item != null) {
            this.props.getSearchResults(item);
        }
    }

    onSearchSubmit = (input) => {
        this.props.history.push("/search/" + input);
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
                productUrl={item.productUrl}
            />
        ));

        return (
            <div>
                <div className="container banner">
                    <SearchBar onSearchSubmit={this.onSearchSubmit} searchTerm = {this.props.searchState.searchTerm} />
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