import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class AddGoal extends React.Component {
	render() {
		let { show, onClose } = this.props

		const actions = [
			<FlatButton
				label="Add"
				primary={true}
				onTouchTap={() => onClose()}
			/>,
		];

		return (
			<Dialog
				title="Add goal"
				actions={actions}
				modal={false}
				open={show}
				onRequestClose={() => onClose()}
				titleStyle={{
					paddingBottom: 0
				}}
			>
				<TextField
					hintText="302 or 16008000"
					floatingLabelText="Goal number or Digit"
					keyboardFocused={true}
					style={{
						width: "100%",
						margin: "auto"
					}}
				/>
			</Dialog>
		)
	}
}
