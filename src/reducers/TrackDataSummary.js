const defaultData = {
	name: "",
	date: "2016.00.00",
	time: "00:00:00",
	track: "0.0",
	distance: "0.0",
	avgSpeed: "-",
	maxSpeed: "-",
	minAltitude: "-",
	maxAltitude: "-",
	publicLink: "",
	editLink: ""
}

function trackDataSummary(state = defaultData, action) {
	switch (action.type) {
		case 'SET_TRACKDATA':
			return Object.assign({}, state, action.data)

		default:
			return state
	}
}

export default trackDataSummary
