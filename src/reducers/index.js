import { combineReducers } from 'redux'
import trackDataSummary from './TrackDataSummary'
import trackGraph from './TrackGraph'
import trackGoal from './TrackGoal'
import addGoal from './AddGoal'
import selectMap from './SelectMap'

const reducer = combineReducers({
	trackDataSummary,
	trackGraph,
	trackGoal,
	addGoal,
	selectMap
})

export default reducer
