const defaultData = {
	show: false,
	editing: false,
	goal: {
		name: '01GOAL',
		sub: '101'
	}
}

function trackGoal(state = defaultData, action) {
	switch (action.type) {
		case 'SHOW_TRACK_GOAL_EDIT':
			return Object.assign({}, state, {
				show: true,
				editing: false,
				goal: action.goal	
			})
		
		case 'HIDE_TRACK_GOAL_EDIT':
			return Object.assign({}, state, {
				show: false
			})
		
		case 'EDIT_TRACK_GOAL_EDIT':
			return Object.assign({}, state, {
				editing: true
			})


		default:
			return state
	}
}

export default trackGoal
