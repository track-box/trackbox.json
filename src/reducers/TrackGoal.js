const defaultData = {
	show: false,
	goal: {
		name: '01GOAL',
		sub: '101'
	}
}

function trackGoal(state = defaultData, action) {
	switch (action.type) {
		case 'SHOW_TRACK_GOAL':
			return Object.assign({}, state, {
				show: true,
				goal: action.goal	
			})
		
		case 'HIDE_TRACK_GOAL':
			return Object.assign({}, state, {
				show: false
			})

		default:
			return state
	}
}

export default trackGoal
