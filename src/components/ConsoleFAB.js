import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import {blue50} from 'material-ui/styles/colors';

const style = {
	position: "absolute",
	bottom: "20px",
	right: "10px",
	zIndex: 1000
};

const iconStyle = {
	color: "#424242"
};

const ConsoleFAB = (props) => (
	<FloatingActionButton style={style} mini={true} backgroundColor={blue50} {...props}>
		<FontIcon className="material-icons" style={iconStyle}>assessment</FontIcon>
	</FloatingActionButton>
);

export default ConsoleFAB;
