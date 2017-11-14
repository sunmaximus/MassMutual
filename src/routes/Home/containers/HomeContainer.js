import { connect } from 'react-redux'
import Home from '../components/Home'

import { initializeNewYorkTime, getNewDataOnBottomScroll } from '../modules/home'

const mapStateToProps = ({ newYorkTimeReducer }) => (
    { newYorkTime: newYorkTimeReducer.docs ? newYorkTimeReducer.docs : [] }
)

// const mapDispatchToProps = {
//   initializeNewYorkTime,
//   getNewDataOnBottomScroll
// }

export default connect(mapStateToProps, { initializeNewYorkTime, getNewDataOnBottomScroll })(Home)
