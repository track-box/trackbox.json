import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButtonExampleSimple from './my';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
	<MuiThemeProvider>
		<RaisedButtonExampleSimple/>
	</MuiThemeProvider>
);

ReactDOM.render(
	<App />,
	document.getElementById('app')
);

