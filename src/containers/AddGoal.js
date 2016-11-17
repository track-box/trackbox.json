import { connect } from 'react-redux'
import AddGoal from '../components/AddGoal'
import { hideAddGoal } from '../actions'

const mapStateToProps = (state) => {
	return {
		show: state.addGoal.show,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClose: () => dispatch(hideAddGoal())
	}
}

const AddGoalContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddGoal)

export default AddGoalContainer
