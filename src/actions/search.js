import * as ActionTypes from './ActionTypes';

export const getSearchResults =(searchTerm, items) =>{
  return{
      type: ActionTypes.UPDATE_SEARCH_RESULTS,
      searchResults: items,
      searchTerm
  }
  
}

export const setRequestState =(requestState) =>{
  return{
       type: ActionTypes.SET_REQUEST_STATE,
       requestState: requestState,
  }
}



