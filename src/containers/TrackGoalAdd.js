import { connect } from 'react-redux'
import TrackGoalAdd from '../components/TrackGoalAdd'
import { hideTrackGoalAdd } from '../actions'

const mapStateToProps = (state) => {
	return state.trackGoalAdd
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClose: () => dispatch(hideTrackGoalAdd())
	}
}

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(TrackGoalAdd)

export default Container
