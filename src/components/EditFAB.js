import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import {red500} from 'material-ui/styles/colors';

const style = {
	position: "absolute",
	bottom: "84px",
	right: "10px",
	zIndex: 1000
};

const EditFAB = (props) => {
	return (
		<FloatingActionButton style={style} backgroundColor={red500} {...props}>
			<FontIcon className="material-icons">edit</FontIcon>
		</FloatingActionButton>
	)
}

export default EditFAB;
