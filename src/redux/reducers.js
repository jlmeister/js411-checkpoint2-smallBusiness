import { combineReducers } from "redux";
import { ADD_LISTING, DELETE_LISTING, LOG_IN, LOG_OUT, FETCH_COORDINATES } from "./constants";

const user = (state = null, action) => {
  switch (action.type) {
    case LOG_IN:
      console.log('log in')
      document.cookie = 'user='+action.value+';max-age=600';
      return action.value;
    case LOG_OUT:
      console.log('log out')
      document.cookie = '';
      return null;
    default:
      return state;
  }
}

const listings = (state = [], action) => {
  switch (action.type) {
    case ADD_LISTING:
      console.log('add listing')
      return state;
    case DELETE_LISTING:
      console.log('delete listing')
      return state;
    default:
      return state;
  }
}

const map = (state = '', action) => {
  switch (action.type) {
    case FETCH_COORDINATES:
      console.log('fetch coordinates')
      return state;
    default:
      return state;
  }
}

export default combineReducers({ user, listings, map })