import * as ActionTypes from './ActionTypes';

export const getSearchResults =(searchTerm) =>{
  return{
      type: ActionTypes.UPDATE_SEARCH_RESULTS,
      searchResulsts: [],
      searchTerm

  }
}