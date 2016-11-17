import { connect } from 'react-redux'
import TrackGoalEdit from '../components/TrackGoalEdit'
import { hideTrackGoalEdit, editTrackGoalEdit } from '../actions'

const mapStateToProps = (state) => {
	return state.trackGoalEdit
}

const mapDispatchToProps = (dispatch) => {
	return {
		onEdit: () => dispatch(editTrackGoalEdit()),
		onClose: () => dispatch(hideTrackGoalEdit())
	}
}

const TrackGoalContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TrackGoalEdit)

export default TrackGoalContainer
