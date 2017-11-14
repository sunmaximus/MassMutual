import moment from 'moment'

import {
    INITIALIZE_NEW_YORK_TIME_DATA,
    initializeNewYorkTimeRecieved,
    articleSearch
} from '../modules/home'

const newYorkTimeMiddleware = store => next => action => {
  if (action.type === INITIALIZE_NEW_YORK_TIME_DATA) {
    let todayDate = moment(new Date()).format('YYYYMMDD')
    let startDate = moment(new Date()).subtract(7, 'days').format('YYYYMMDD')
    articleSearch(action.API_KEY)
    .query({ begin_date: startDate, end_date: todayDate })
    .end(
      (err, res) => {
        if (err || !res.ok) {
          console.log('error')
        }
        // console.log(res)
        store.dispatch(initializeNewYorkTimeRecieved(res.body))
      })
  } next(action)
}
export default newYorkTimeMiddleware
