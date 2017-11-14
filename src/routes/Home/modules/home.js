import request from 'superagent'
import moment from 'moment'
// ------------------------------------
// Constants
// ------------------------------------
export const INITIALIZE_NEW_YORK_TIME_DATA = 'INITIALIZE_NEW_YORK_TIME_DATA'
export const INITIALIZE_NEW_YORK_TIME_DATA_RECIEVED = 'INITIALIZE_NEW_YORK_TIME_DATA_RECIEVED'

export const GET_NEW_DATA_ON_BOTTOM_SCROLL = 'GET_NEW_DATA_ON_BOTTOM_SCROLL'
export const GET_NEW_DATA_ON_BOTTOM_SCROLL_RECEIVED = 'GET_NEW_DATA_ON_BOTTOM_SCROLL_RECEIVED'
// ------------------------------------
// Actions
// ------------------------------------
export const initializeNewYorkTime = () => {
  const API_KEY = 'a8457610b68381085a3fff38d6a36337:6:74255139'
  return {
    type: INITIALIZE_NEW_YORK_TIME_DATA,
    API_KEY
  }
}

export const initializeNewYorkTimeRecieved = (data) => {
  return {
    type: INITIALIZE_NEW_YORK_TIME_DATA_RECIEVED,
    data
  }
}

export const getNewDataOnBottomScroll = () => {
  const API_KEY = 'a8457610b68381085a3fff38d6a36337:6:74255139'
  return {
    type: GET_NEW_DATA_ON_BOTTOM_SCROLL,
    API_KEY
  }
}

export const getNewDataOnBottomScrollReceived = (data) => {
  return {
    type: GET_NEW_DATA_ON_BOTTOM_SCROLL_RECEIVED,
    data
  }
}

// ------------------------------------
// Async Call
// ------------------------------------
export const articleSearch = (API_KEY) => request
  .get(`https://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}`)

export const actions = {
  initializeNewYorkTime,
  initializeNewYorkTimeRecieved
}

// ------------------------------------
// Action Handlers
// ------------------------------------
// const ACTION_HANDLERS = {
//   [COUNTER_INCREMENT]    : (state, action) => state + action.payload,
//   [COUNTER_DOUBLE_ASYNC] : (state, action) => state * 2
// }

// ------------------------------------
// Reducer
// ------------------------------------
const initialReducer = {
  docs: [],
  startDate: moment(new Date()).subtract(7, 'days').format('YYYYMMDD'),
  endDate: moment(new Date()).format('YYYYMMDD'),
}
export default function homeReducer (state = initialReducer, action) {
  switch (action.type) {
    case INITIALIZE_NEW_YORK_TIME_DATA:
      return { ...state }
    case INITIALIZE_NEW_YORK_TIME_DATA_RECIEVED:
      console.log(action.data.response)
      return {
        ...state,
        startDate: moment(state.startDate).subtract(7, 'days').format('YYYYMMDD'),
        endDate: state.startDate,
        docs: [...state.docs, ...action.data.response.docs]
      }
    case GET_NEW_DATA_ON_BOTTOM_SCROLL_RECEIVED:
      return {
        ...state,
        startDate: moment(state.startDate).subtract(7, 'days').format('YYYYMMDD'),
        endDate: state.startDate,
        docs: [...state.docs, ...action.data.response.docs]
      }
    default:
      return state
  }
}
