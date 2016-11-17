const defaultData = {
	show: false,
	map: "none"
}

function selectMap(state = defaultData, action) {
	switch (action.type) {
		case 'SHOW_SELECT_MAP':
			return Object.assign({}, state, {
				show: true
			})
		
		case 'HIDE_SELECT_MAP':
			return Object.assign({}, state, {
				show: false
			})
		
		case 'MAP_CHANGED':
			return Object.assign({}, state, {
				map: action.map
			})

		default:
			return state
	}
}

export default selectMap
