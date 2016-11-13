// react
import React from 'react';
import ReactDOM from 'react-dom';

// material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// my component
import TrackboxFAB from './components/TrackboxFAB';
import Console from './components/Console';


const App = () => (
	<MuiThemeProvider>
		<div>
			<TrackboxFAB />
			<Console />
		</div>
	</MuiThemeProvider>
);

export default App;
