// react
import React from 'react';
import ReactDOM from 'react-dom';

// material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {blue500, grey50, grey600} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// my component
import TrackboxFAB from './components/TrackboxFAB';
import Console from './components/Console';
import Edit from './components/Edit';
import TrackGoalEditContainer from './containers/TrackGoalEdit';
import TrackGoalAddContainer from './containers/TrackGoalAdd';
import LoadingContainer from './containers/Loading';
import SnackbarContainer from './containers/Snackbar';

const muiTheme = getMuiTheme({
	tabs: {
		backgroundColor: grey50,
		textColor: grey600,
		selectedTextColor: blue500
	},
	inkBar: {
		backgroundColor: blue500
	}
});


const EditApp = () => (
	<MuiThemeProvider muiTheme={muiTheme}>
		<div>
			<TrackboxFAB />
			<Console mini={false}/>
			<Edit />
			<TrackGoalEditContainer />
			<TrackGoalAddContainer />
			<LoadingContainer />
			<SnackbarContainer />
		</div>
	</MuiThemeProvider>
);

export default EditApp;
