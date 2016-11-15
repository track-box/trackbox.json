import React from 'react';
import BottomSheets from './material/BottomSheets';
import EditFAB from './EditFAB';
import EditListContainer from '../containers/EditList';
import AddGoalContainer from '../containers/AddGoal'
import SelectMapContainer from '../containers/SelectMap'
import RenameContainer from '../containers/Rename'
import LinkContainer from '../containers/Link'

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
					<EditListContainer onSelected={this.handleClose} />
				</BottomSheets>
				<AddGoalContainer />
				<SelectMapContainer />
				<RenameContainer />
				<LinkContainer />
			</div>
		);
	}
}
