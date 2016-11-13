import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {blue500, grey50, grey600} from 'material-ui/styles/colors';
import BottomSheets from './BottomSheets';
import ConsoleFAB from './ConsoleFAB';
import TrackDataTableContainer from '../containers/TrackDataTable';
import TrackDataGraphContainer from '../containers/TrackDataGraph';

const styles = {
	content: {
		padding: 0
	}
};

export default class Console extends React.Component {
	state = {
		open: false,
	};

	handleOpen = () => {
		this.setState({open: true});
	};

	handleClose = () => {
		this.setState({open: false});
	};

	render() {
		return (
			<div>
				<ConsoleFAB onTouchTap={this.handleOpen} />
				<BottomSheets
					bodyStyle={styles.content}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
				>
					<Tabs>
						<Tab label="Data">
							<TrackDataTableContainer />
						</Tab>
						<Tab label="Graph">
							<TrackDataGraphContainer />
						</Tab>
					</Tabs>
				</BottomSheets>
			</div>
		);
	}
}
