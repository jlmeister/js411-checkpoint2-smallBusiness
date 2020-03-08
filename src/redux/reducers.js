import { combineReducers } from "redux";
import { ADD_LISTING, DELETE_LISTING } from "./constants";

const formatHours = (hours) => {
  let formattedHours = '';
  let timeArr = hours.split(':');
  console.log('timeArr ', timeArr)

  if (timeArr[0] < 12) {
    if (timeArr[1] === '00')
      formattedHours = timeArr[0].concat('am')
    else
      formattedHours = hours + 'am'
  }
  else {
    timeArr[0] = parseInt(timeArr[0]) - 12;
    if (timeArr[1] === '00')
      formattedHours = timeArr[0].toString().concat('pm')
    else
      formattedHours = timeArr.join(':').concat('pm');
  }
  console.log('formatted ', formattedHours)
  return formattedHours;
}

const listings = (state = [], action) => {
  switch (action.type) {
    case ADD_LISTING:
      console.log(action.value.hoursFrom, action.value.hoursTo)
      action.value.hoursFrom = formatHours(action.value.hoursFrom)
      action.value.hoursTo = formatHours(action.value.hoursTo)
      return [...state, action.value];
    case DELETE_LISTING:
      return state.filter((listing, index) => index !== action.value );
    default:
      return state;
  }
}

export default combineReducers({ listings })