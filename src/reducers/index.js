import { combineReducers } from 'redux'
import trackDataSummary from './TrackDataSummary'
import trackGraph from './TrackGraph'
import trackGoal from './TrackGoal'
import addGoal from './AddGoal'

const reducer = combineReducers({
	trackDataSummary,
	trackGraph,
	trackGoal,
	addGoal
})

export default reducer
