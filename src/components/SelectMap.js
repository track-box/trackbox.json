import React from 'react';
import Dialog from 'material-ui/Dialog';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class SelectMap extends React.Component {
	handleChange = (event, index, value) => {
		window.track.setMap(value)

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
					<MenuItem value={"Watarase2016"} primaryText="Watarse2016" />
					<MenuItem value={"Saku2016"} primaryText="Saku2016" />
					<MenuItem value={"Suzuka2016"} primaryText="Suzuka2016" />
					<MenuItem value={"Ichinoseki2016"} primaryText="Ichinoseki2016" />
					<MenuItem value={"Saga2016"} primaryText="Saga2016" />
				</SelectField>
			</Dialog>
		)
	}
}
