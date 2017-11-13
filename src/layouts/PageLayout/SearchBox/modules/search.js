import request from 'superagent'
// ------------------------------------
// Constants
// ------------------------------------
export const SEARCH = 'SEARCH'
export const SEARCH_RECIEVED = 'SEARCH_RECIEVED'

// ------------------------------------
// Actions
// ------------------------------------
export const search = (searchKey) => {
  const API_KEY = 'a8457610b68381085a3fff38d6a36337:6:74255139'
  return {
    type: SEARCH,
    API_KEY,
    searchKey
  }
}

export const searchReceived = (data) => {
  return {
    type: SEARCH_RECIEVED,
    data
  }
}

// ------------------------------------
// Async Call
// ------------------------------------
export const searchAsync = (API_KEY, searchKey) => request
  .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}`)
  .query({ q: searchKey })

// ------------------------------------
// Reducer
// ------------------------------------
const initialReducer = {
  docs: []
}

export default function searchReducer (state = initialReducer, action) {
  switch (action.type) {
    case SEARCH_RECIEVED:
      return {
        ...state,
        docs: [...action.data]
      }
    default:
      return state
  }
}
