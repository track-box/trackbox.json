import { connect } from 'react-redux'
import Rename from '../components/Rename'
import { hideRename, setTrackData } from '../actions'

const mapStateToProps = (state) => {
	return {
		show: state.rename.show,
		name: state.trackDataSummary.name
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClose: () => dispatch(hideRename()),
		onNameChange: (name) => dispatch(setTrackData({ name:name }))
	}
}

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(Rename)

export default Container
