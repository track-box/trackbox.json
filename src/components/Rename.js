import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class Rename extends React.Component {
	state = {
		value: "",
	}

	handleChange = (event) => {
		this.setState({
			value: event.target.value,
		})
	}

	handleSubmit = () => {
		window.track.setTitle(this.state.value)
		this.props.onNameChange(this.state.value)
		this.props.onClose()
	}

	render() {
		let { show, name, onClose } = this.props

		if (this.state.value == "") this.state.value = name

		const actions = [
			<FlatButton
				label="Save"
				primary={true}
				onTouchTap={this.handleSubmit}
			/>,
		];

		return (
			<Dialog
				actions={actions}
				modal={false}
				open={show}
				onRequestClose={() => onClose()}
			>
				<TextField
					value={this.state.value}
					onChange={this.handleChange}
					floatingLabelText="Title"
					style={{
						width: "100%",
						margin: "auto"
					}}
				/>
			</Dialog>
		)
	}
}
