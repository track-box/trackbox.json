import { connect } from 'react-redux'
import EditList from '../components/EditList'
import { showAddGoal, showSelectMap, showRename, showLink } from '../actions'

const mapStateToProps = (state) => {
	return {
		mapSelected: state.selectMap.map != "none"
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		showAddGoal: () => dispatch(showAddGoal()),
		showSelectMap: () => dispatch(showSelectMap()),
		showRename: () => dispatch(showRename()),
		showLink: () => dispatch(showLink()),
	}
}

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(EditList)

export default Container
