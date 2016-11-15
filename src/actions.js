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

export const showSelectMap = () => ({
	type: 'SHOW_SELECT_MAP'
})

export const hideSelectMap = () => ({
	type: 'HIDE_SELECT_MAP'
})

export const mapChanged = (map) => ({
	type: 'MAP_CHANGED',
	map: map
})

export const showRename = () => ({
	type: 'SHOW_RENAME'
})

export const hideRename = () => ({
	type: 'HIDE_RENAME'
})

export const showLink = () => ({
	type: 'SHOW_LINK'
})

export const hideLink = () => ({
	type: 'HIDE_LINK'
})

export const showSave = () => ({
	type: 'SHOW_SAVE'
})

export const hideSave = () => ({
	type: 'HIDE_SAVE'
})

export const doneSave = () => ({
	type: 'DONE_SAVE'
})

