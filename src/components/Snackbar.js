import React from 'react';
import Snackbar from 'material-ui/Snackbar';

export default class SnackbarSimple extends React.Component {
	render() {
		let { show, message, onClose } = this.props
		return (
			<Snackbar
				open={show}
				message={message}
				autoHideDuration={2000}
				onRequestClose={onClose}
			/>
		);
	}
}
