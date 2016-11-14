import { combineReducers } from 'redux'
import trackDataSummary from './TrackDataSummary'
import trackGraph from './TrackGraph'
import trackGoal from './TrackGoal'

const reducer = combineReducers({
	trackDataSummary,
	trackGraph,
	trackGoal
})

export default reducer
