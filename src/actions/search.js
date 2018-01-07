import * as ActionTypes from './ActionTypes';

export const getSearchResults =(searchTerm, items) =>{
  return{
      type: ActionTypes.UPDATE_SEARCH_RESULTS,
      searchResults: items,
      searchTerm
  }
}

