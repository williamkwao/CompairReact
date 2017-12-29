import * as ActionTypes from './ActionTypes';
import jsonp from 'jsonp';

export const getSearchResults =(searchTerm) =>{
  return{
      type: ActionTypes.UPDATE_SEARCH_RESULTS,
      searchResults: [],
      searchTerm
  }
}

