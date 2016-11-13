import { combineReducers } from 'redux'
import trackDataSummary from './TrackDataSummary'
import trackGraph from './TrackGraph'

const reducer = combineReducers({
	trackDataSummary,
	trackGraph
})

export default reducer
