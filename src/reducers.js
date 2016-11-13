import { combineReducers } from 'redux'

const defaultTrackData = {
	date: "2016.00.00",
	time: "00:00:00",
	track: "0.0",
	distance: "0.0",
	avgSpeed: "-",
	maxSpeed: "-",
	minAltitude: "-",
	maxAltitude: "-"
}

function trackData(state = defaultTrackData, action) {
	switch (action.type) {
		case 'SET_TRACKDATA':
			return Object.assign({}, state, action.data)

		default:
			return state
	}
}

const reducer = combineReducers({
	  trackData
})

export default reducer
