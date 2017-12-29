import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
    searchTerm : '',
    searchResults: []
}

export default function Search(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_SEARCH_RESULTS:
            return {
                searchTerm: action.searchTerm,
                searchResults: action.searchResults

            };
        default:
            return state;

    }


}
