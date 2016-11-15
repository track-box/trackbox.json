import React from 'react';
import Dialog from 'material-ui/Dialog';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class SelectMap extends React.Component {
	handleChange = (event, index, value) => {
		console.log(value)

		this.props.onMapChange(value)
		this.props.onClose()
	}

	render() {
		let { show, map, onClose } = this.props

		return (
			<Dialog
				modal={false}
				open={show}
				onRequestClose={() => onClose()}
			>
				<SelectField
					floatingLabelText="Select map"
					value={map}
					onChange={this.handleChange}
					style={{ width:"100%" }}
				>
					<MenuItem value={"none"} primaryText="" />
					<MenuItem value={"Saga2016"} primaryText="Saga2016" />
					<MenuItem value={"Ichinoseki2016"} primaryText="Ichinoseki2016" />
				</SelectField>
			</Dialog>
		)
	}
}
