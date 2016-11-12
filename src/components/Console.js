import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import BottomSheets from './BottomSheets';
import ConsoleFAB from './ConsoleFAB';

const styles = {
	content: {
		padding: 0
	},
	headline: {
		fontSize: 24,
		paddingTop: 16,
		marginBottom: 12,
		fontWeight: 400,
	},
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
						<Tab label="Data" >
							<div>
							<h2 style={styles.headline}>Tab One</h2>
							<p>
							This is an example tab.
							</p>
							</div>
						</Tab>
						<Tab label="Graph" >
							<div>
							<h2 style={styles.headline}>Tab Two</h2>
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
