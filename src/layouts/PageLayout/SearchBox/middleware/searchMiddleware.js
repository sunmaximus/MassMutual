import {
    SEARCH,
    searchAsync,
    searchReceived
} from '../modules/search'

const searchMiddleware = store => next => action => {
  if (action.type === SEARCH) {
    searchAsync(action.API_KEY, action.searchKey).end(
      (err, res) => {
        if (err || !res.ok) {
          console.log('error')
        }
        // console.log(res.body.response.docs)
        store.dispatch(searchReceived(res.body.response.docs))
      })
  } next(action)
}
export default searchMiddleware
