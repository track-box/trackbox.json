import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import AppEdit from './appEdit'

import { setTrackData, setTrackGraph, showTrackGoalEdit, mapChanged, showLoading, hideLoading, showSnackbar, showTrackGoalAdd } from './actions'

let store = createStore(reducer)

render(
	<Provider store={store}>
		<AppEdit />
	</Provider>,
	document.getElementById('app')
)


window.trackboxReact = {
	setTrackData: function (data) {
		store.dispatch(setTrackData(data))
	},
	setTrackGraph: function (data) {
		store.dispatch(setTrackGraph(data))
	},
	showTrackGoal: function (goal) {
		store.dispatch(showTrackGoalEdit(goal))
	},
	setMapName: function (map) {
		store.dispatch(mapChanged(map))
	},
	showLoading: function () {
		store.dispatch(showLoading())
	},
	hideLoading: function () {
		store.dispatch(hideLoading())
	},
	showSnackbar: function (message) {
		store.dispatch(showSnackbar(message))
	},
	showTrackGoalAdd: function (goal) {
		store.dispatch(showTrackGoalAdd(goal))
	},
}

