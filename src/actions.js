export const setTrackData = (data) => ({
	type: 'SET_TRACKDATA',
	data: data
})

export const setTrackGraph = (data) => ({
	type: 'SET_TRACK_GRAPH',
	data: data
})

export const showTrackGoal = (goal) => ({
	type: 'SHOW_TRACK_GOAL',
	goal: goal
})

export const hideTrackGoal = () => ({
	type: 'HIDE_TRACK_GOAL'
})

export const showAddGoal = () => ({
	type: 'SHOW_ADD_GOAL'
})

export const hideAddGoal = () => ({
	type: 'HIDE_ADD_GOAL'
})
