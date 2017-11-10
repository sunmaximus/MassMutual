import { connect } from 'react-redux'
import Article from '../components/Article'

const mapStateToProps = ({ newYorkTimeReducer }) => (
    { newYorkTime: newYorkTimeReducer.docs ? newYorkTimeReducer.docs : [] }
)

export default connect(mapStateToProps, null)(Article)
