import {
    INITIALIZE_NEW_YORK_TIME_DATA,
    GET_NEW_DATA_ON_BOTTOM_SCROLL,
    initializeNewYorkTimeRecieved,
    getNewDataOnBottomScrollReceived,
    articleSearch
} from '../modules/home'

const newYorkTimeMiddleware = store => next => action => {
  const { startDate, endDate } = store.getState().newYorkTimeReducer

  if (action.type === INITIALIZE_NEW_YORK_TIME_DATA) {
    articleSearch(action.API_KEY)
    .query({ begin_date: startDate, end_date: endDate })
    .end(
      (err, res) => {
        if (err || !res.ok) {
          console.log('error')
        }
        // console.log(res)
        store.dispatch(initializeNewYorkTimeRecieved(res.body))
      })
  } else if (action.type === GET_NEW_DATA_ON_BOTTOM_SCROLL) {
    articleSearch(action.API_KEY)
    .query({ begin_date: startDate, end_date: endDate })
    .end(
      (err, res) => {
        if (err || !res.ok) {
          console.log('error')
        }
        // console.log(res)
        store.dispatch(getNewDataOnBottomScrollReceived(res.body))
      })
  }
  next(action)
}
export default newYorkTimeMiddleware
