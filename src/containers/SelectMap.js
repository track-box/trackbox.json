import { connect } from 'react-redux'
import SelectMap from '../components/SelectMap'
import { hideSelectMap, mapChanged } from '../actions'

const mapStateToProps = (state) => {
	return {
		show: state.selectMap.show,
		map: state.selectMap.map
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClose: () => dispatch(hideSelectMap()),
		onMapChange: (map) => dispatch(mapChanged(map))
	}
}

const Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(SelectMap)

export default Container
