import * as ActionTypes from '../actions/ActionTypes';

const initialStatte = {
    searchTerm: '',
    searchResults: []
}

export default function Search(state = initialStatte, action) {
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
