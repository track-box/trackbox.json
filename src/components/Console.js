import React from 'react';
import {Tab} from 'material-ui/Tabs';
import {blue500, grey50, grey600} from 'material-ui/styles/colors';
import BottomSheetsWithCloseButton from './material/BottomSheetsWithCloseButton';
import TabsRight from './material/TabsRight';
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
				<BottomSheetsWithCloseButton
					bodyStyle={styles.content}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
				>
					<TabsRight>
						<Tab label="Data">
							<TrackDataTableContainer />
						</Tab>
						<Tab label="Graph">
							<TrackDataGraphContainer />
						</Tab>
					</TabsRight>
				</BottomSheetsWithCloseButton>
			</div>
		);
	}
}
