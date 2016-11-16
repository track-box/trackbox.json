import { combineReducers } from 'redux'
import trackDataSummary from './TrackDataSummary'
import trackGraph from './TrackGraph'
import trackGoal from './TrackGoal'
import trackGoalEdit from './TrackGoalEdit'
import addGoal from './AddGoal'
import selectMap from './SelectMap'
import rename from './Rename'
import link from './Link'
import save from './Save'
import loading from './Loading'
import snackbar from './Snackbar'

const reducer = combineReducers({
	trackDataSummary,
	trackGraph,
	trackGoal,
	trackGoalEdit,
	addGoal,
	selectMap,
	rename,
	link,
	save,
	loading,
	snackbar,
})

export default reducer
