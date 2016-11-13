const defaultData = {
	alt: [[0, 0]],
	speed: [[0, 0]]
}

function trackGraph(state = defaultData, action) {
	switch (action.type) {
		case 'SET_TRACK_GRAPH':
			return Object.assign({}, state, action.data)

		default:
			return state
	}
}

export default trackGraph
