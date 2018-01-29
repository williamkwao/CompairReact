import React, { Component } from 'react';
import Card from './Card';

class Cards extends Component {
    componentDidMount = () => {
        let item = this.props.match.params.item;
        if ( (item !== null && this.props.searchState.searchResults.length == 0) || (item != this.props.searchState.searchTerm )) {
            this.props.getSearchResults(item);
        }
        // this.props.getSearchResults(item);
        // console.log("mmmmmm")
    }

    // shouldComponentUpdate = (nextprop, nextstate) => {
    //    return false;
    // }

    render() {
        var searchResults = this.props.searchState.searchResults;
        const CardComponents = searchResults.map((item, index) => {
            var cardImage = (item.mediumImage) ? item.mediumImage : "/img/notfound.jpg";
            var textLink = (item.retailer === "Amazon") ? "Go to Amazon" : "Go to Walmart";
            return <Card
                name={item.name}
                salePrice={item.salePrice}
                shortDescription={item.shortDescription}
                image={cardImage}
                key={index}
                productUrl={item.productURL}
                urlText={textLink}
            />
        });

        return (
            <div>
                {CardComponents}
            </div>
        )
    }
}

export default Cards;