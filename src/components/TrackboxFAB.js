import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {lightBlueA700} from 'material-ui/styles/colors';
import TrackboxIcon from './TrackboxIcon';

const style = {
	position: "absolute",
	top: "10px",
	left: "10px",
	zIndex: 1000
};

const iconStyle = {
	width: "28px",
	marginRight: "2px"
};

const TrackboxFAB = () => (
	<FloatingActionButton backgroundColor={lightBlueA700} style={style}>
		<TrackboxIcon style={iconStyle}/>
	</FloatingActionButton>
);

export default TrackboxFAB;
