import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import App from './app'

import { setTrackData } from './actions'

let store = createStore(reducer)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)


store.dispatch(setTrackData({ date: "2016.11.11" }))

