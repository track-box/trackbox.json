import { combineReducers } from 'redux'
import trackDataSummary from './TrackDataSummary'
import trackGraph from './TrackGraph'
import trackGoal from './TrackGoal'
import addGoal from './AddGoal'
import selectMap from './SelectMap'
import rename from './Rename'
import link from './Link'
import save from './Save'
import loading from './Loading'

const reducer = combineReducers({
	trackDataSummary,
	trackGraph,
	trackGoal,
	addGoal,
	selectMap,
	rename,
	link,
	save,
	loading
})

export default reducer
