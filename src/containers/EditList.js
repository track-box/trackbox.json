import { connect } from 'react-redux'
import EditList from '../components/EditList'
import { showAddGoal, showSelectMap } from '../actions'

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		showAddGoal: () => dispatch(showAddGoal()),
		showSelectMap: () => dispatch(showSelectMap()),
	}
}

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(EditList)

export default Container
