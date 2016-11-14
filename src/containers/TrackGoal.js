import { connect } from 'react-redux'
import TrackGoal from '../components/TrackGoal'
import { hideTrackGoal } from '../actions'

const mapStateToProps = (state) => {
	return {
		show: state.trackGoal.show,
		goal: state.trackGoal.goal
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClose: () => dispatch(hideTrackGoal())
	}
}

const TrackGoalContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TrackGoal)

export default TrackGoalContainer
