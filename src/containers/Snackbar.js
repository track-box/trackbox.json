import { connect } from 'react-redux'
import Snackbar from '../components/Snackbar'
import { hideSnackbar } from '../actions'

const mapStateToProps = (state) => {
	return {
		show: state.snackbar.show,
		message: state.snackbar.message
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClose: () => dispatch(hideSnackbar())
	}
}

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(Snackbar)

export default Container
