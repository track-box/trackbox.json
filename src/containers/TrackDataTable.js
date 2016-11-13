import { connect } from 'react-redux'
import TrackDataTable from '../components/TrackDataTable'


const mapStateToProps = (state) => {
	return {
		data: state.trackData
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

const TrackDataTableContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TrackDataTable)

export default TrackDataTableContainer
