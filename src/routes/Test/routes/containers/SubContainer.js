import { connect } from 'react-redux'
import Sub from '../components/Sub'

const mapStateToProps = ({ newYorkTimeReducer }) => (
    { newYorkTime: newYorkTimeReducer.docs ? newYorkTimeReducer.docs : [] }
)

export default connect(mapStateToProps, null)(Sub)
