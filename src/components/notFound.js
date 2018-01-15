import React from 'react';
import { Link } from 'react-router-dom';


class notFound extends React.Component {
    render() {
        return (
            <div className="container banner">
                <h3>Page is not Available !! But you can</h3>
                <div className="buttons">
                    <Link className="button" to="/">
                        SEARCH AGAIN
                    </Link>
                </div>
            </div>
        )
    }
}

export default notFound;