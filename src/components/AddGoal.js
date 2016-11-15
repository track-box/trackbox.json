import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class AddGoal extends React.Component {
	state = {
		value: "",
	}

	handleChange = (event) => {
		this.setState({
			value: event.target.value,
		})
	}

	handleSubmit = () => {
		console.log(this.state.value)
		this.props.onClose()

		this.setState({
			value: "",
		})
	}

	render() {
		let { show, onClose } = this.props

		const actions = [
			<FlatButton
				label="Add"
				primary={true}
				onTouchTap={this.handleSubmit}
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
					value={this.state.value}
					onChange={this.handleChange}
					hintText="302 or 16008000"
					floatingLabelText="Goal number or Digit"
					type={"tel"}
					style={{
						width: "100%",
						margin: "auto"
					}}
				/>
			</Dialog>
		)
	}
}
