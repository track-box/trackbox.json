import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import App from './app'

import { setTrackData, setTrackGraph, showTrackGoal } from './actions'

let store = createStore(reducer)

render(
	<Provider store={store}>
		<App />
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
	}
}

