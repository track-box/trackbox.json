import { connect } from 'react-redux'
import Save from '../components/Save'
import { hideSave, doneSave } from '../actions'

const mapStateToProps = (state) => {
	return {
		show: state.save.show,
		saving: state.save.saving,
		title: state.save.title,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClose: () => dispatch(hideSave()),
		done: () => dispatch(doneSave()),
	}
}

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(Save)

export default Container
