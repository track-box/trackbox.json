import { connect } from 'react-redux'
import Link from '../components/Link'
import { hideLink } from '../actions'

const mapStateToProps = (state) => {
	return {
		show: state.link.show,
		publicLink: state.trackDataSummary.publicLink,
		editLink: state.trackDataSummary.editLink,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClose: () => dispatch(hideLink()),
	}
}

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link)

export default Container
