import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {blue500, grey50, grey600} from 'material-ui/styles/colors';
import BottomSheets from './BottomSheets';
import ConsoleFAB from './ConsoleFAB';
import TrackDataTable from './TrackDataTable';

const styles = {
	content: {
		padding: 0
	},
	tab: {
		backgroundColor: grey50,
		color: grey600,
	},
	inkBar: {
		backgroundColor: blue500
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
					<Tabs inkBarStyle={styles.inkBar} >
						<Tab label="Data" style={styles.tab}>
							<TrackDataTable />
						</Tab>
						<Tab label="Graph" style={styles.tab}>
							<div>
							<p>
							This is another example tab.
							</p>
							</div>
						</Tab>
					</Tabs>
				</BottomSheets>
			</div>
		);
	}
}
