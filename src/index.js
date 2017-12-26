import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Search from './reducers/search';
import Compair from './containers/Compair'
import './index.css';

const store = createStore(
    Search
);

ReactDOM.render(
    <Provider store={store}>
        <Compair />
    </Provider>,
    document.getElementById('root')
);
