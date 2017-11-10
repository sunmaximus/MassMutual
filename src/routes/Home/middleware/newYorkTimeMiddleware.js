import {
    INITIALIZE_NEW_YORK_TIME_DATA,
    initializeNewYorkTimeRecieved,
    articleSearch
} from '../modules/home'

const newYorkTimeMiddleware = store => next => action => {
  if (action.type === INITIALIZE_NEW_YORK_TIME_DATA) {
    articleSearch(action.API_KEY).end(
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
