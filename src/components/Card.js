import React from 'react';
import PropTypes from 'prop-types'


const Card = (props) => {
    let retailLogo = "/img/wmtlogo.png";
    let linkStyle = "card-link-wal"
    let bottomBorder = "wal"
        if (props.urlText === "Go to Amazon") {
            retailLogo = "/img/amazonlogo.png";
            linkStyle = "card-link a"
            bottomBorder = "amz"
        }
    return (

        <div className="col s12 m3 l3">
            <div className={"card item-card " + bottomBorder} >
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator item-image" alt="Item" src={props.image} />
                </div>
                <div className="card-content">
                    <div className="card-title border">
                        <span className="activator item-title">{props.name}</span>
                    </div>
                    <div className="card-price">
                        <p><em>${props.salePrice}</em></p>
                    </div>
                    <div className={linkStyle}>
                        <p><a href={props.productUrl}>{props.urlText}</a></p>
                    </div>
                    <div className="retail-logo">
                        <img src={retailLogo} alt="retailer logo"/>
                    </div>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">More Info<i className="material-icons right">close</i></span>
                    <p>{props.shortDescription}</p>
                </div>
            </div>
        </div>

    )

}

Card.propTypes = {

    name: PropTypes.string.isRequired,
    salePrice: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,

}

export default Card;