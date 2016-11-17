import { connect } from 'react-redux'
import Loading from '../components/Loading'

const mapStateToProps = (state) => {
	return {
		show: state.loading.show,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(Loading)

export default Container
