import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import trackboxApp from './reducers'
import App from './app'

let store = createStore(trackboxApp)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)
