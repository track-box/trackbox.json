import React from 'react';
import BottomSheets from './material/BottomSheets';
import EditFAB from './EditFAB';
import EditList from './EditList';

const styles = {
	content: {
		padding: 0
	}
};

export default class Edit extends React.Component {
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
				<EditFAB 
					onTouchTap={this.handleOpen}
				/>
				<BottomSheets
					bodyStyle={styles.content}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
				>
					<EditList />
				</BottomSheets>
			</div>
		);
	}
}
