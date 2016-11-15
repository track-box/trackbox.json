import { combineReducers } from 'redux'
import trackDataSummary from './TrackDataSummary'
import trackGraph from './TrackGraph'
import trackGoal from './TrackGoal'
import addGoal from './AddGoal'
import selectMap from './SelectMap'
import rename from './Rename'

const reducer = combineReducers({
	trackDataSummary,
	trackGraph,
	trackGoal,
	addGoal,
	selectMap,
	rename,
})

export default reducer
