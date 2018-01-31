import * as ActionTypes from '../actions/ActionTypes';
import * as RequestStates from '../actions/RequestStates';

const initialState = {
    requestState: RequestStates.REQUEST_COMPLETE, 
    searchTerm : '',
    searchResults: []
}

export default function Search(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_SEARCH_RESULTS:
            return {
                ...state,
                searchTerm: action.searchTerm,
                searchResults: action.searchResults,
               

            };

        case ActionTypes.SET_REQUEST_STATE:
           return{
                 ...state,
                 requestState: action.requestState
           };
        default:
            return state;

    }


}
