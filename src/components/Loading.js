import React from 'react';
import DialogTransparent from './material/DialogTransparent';
import CircularProgress from 'material-ui/CircularProgress';

export default class Loading extends React.Component {
	render() {
		let { show } = this.props

		return (
			<DialogTransparent
				modal={true}
				open={show}
				contentStyle={{ width: 88 }}	
			>
				<CircularProgress />
			</DialogTransparent>
		)
	}
}
