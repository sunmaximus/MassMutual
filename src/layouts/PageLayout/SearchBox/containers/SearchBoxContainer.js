import { connect } from 'react-redux'
// import { increment, doubleAsync } from '../modules/counter'

import { search } from '../modules/search'
import SearchBox from '../components/SearchBox'
// import { browserHistory } from 'react-router'

// import { locationChange } from '../../../../store/location'
const mapDispatchToProps = {
  search,
//   browserHistory,
//   locationChange
}

// const mapStateToProps = (state) => ({
//   counter : state.counter
// })

export default connect(null, mapDispatchToProps)(SearchBox)
