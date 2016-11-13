import { connect } from 'react-redux'
import TrackDataGraph from '../components/TrackDataGraph'


const mapStateToProps = (state) => {
	return {
		data: state.graphData
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

const TrackDataGraphContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TrackDataGraph)

export default TrackDataGraphContainer
