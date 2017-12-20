import React from 'react';
class Card extends React.Component {
    render() {
        return (
            <div className="row cards">
                <div className="col s12 m3 l3">
                    <div className="card item-card amz">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator item-image" src="img/iphone2.jpg" />
                        </div>
                        <div className="card-content">
                            <div className="card-title border">
                                <span className="activator item-title">Straight Talk Apple iPhone 7 32GB Prepaid Smartphone, Rose Gold.</span>
                            </div>
                            <div className="card-price">
                                <p>Price: <em>$449.00</em></p>
                            </div>
                            <div className="card-link">
                                <p><a href="#">Go to Amazon</a></p>
                            </div>
                            <div className="retail-logo">
                                <img src="img/amazonlogo.png" />
                            </div>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">More Info<i class="material-icons right">close</i></span>
                            <p>Straight Talk Apple iPhone 7 32GB Prepaid Smartphone, Rose Gold.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;