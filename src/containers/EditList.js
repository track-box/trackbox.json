import { connect } from 'react-redux'
import EditList from '../components/EditList'
import { showAddGoal } from '../actions'

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		showAddGoal: () => dispatch(showAddGoal())
	}
}

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(EditList)

export default Container
