import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import AppEdit from './appEdit'

import { setTrackData, setTrackGraph, showTrackGoal, mapChanged, showLoading, hideLoading, showSnackbar } from './actions'

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
		store.dispatch(showTrackGoal(goal))
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
}

