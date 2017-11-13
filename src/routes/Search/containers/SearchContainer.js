import { connect } from 'react-redux'
import Search from '../components/Search'

// import { initializeNewYorkTime } from '../modules/home'

const mapStateToProps = ({ search }) => (
    { search: search.docs ? search.docs : [] }
)

export default connect(mapStateToProps, null)(Search)
