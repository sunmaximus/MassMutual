import { connect } from 'react-redux'
import Home from '../components/Home'

import { initializeNewYorkTime } from '../modules/home'

const mapStateToProps = ({ newYorkTimeReducer }) => (
    { newYorkTime: newYorkTimeReducer.docs ? newYorkTimeReducer.docs : [] }
)

export default connect(mapStateToProps, { initializeNewYorkTime })(Home)
