import React from 'react';
import BottomSheets from './material/BottomSheets';
import RaisedButton from 'material-ui/RaisedButton';

export default class TrackGoalEdit extends React.Component {
	render() {
		let { show, goal, onClose } = this.props

		if (!show) return (<div></div>)

		return (
			<BottomSheets
				modal={false}
				open={show}
				onRequestClose={() => {
					goal.onClose()
					onClose()
				}}
				title={
					<div style={{ padding: 24, position: "relative" }}>
						{goal.name}
						<RaisedButton
							label="add"
							primary={true}
							onTouchTap={() => {
								window.track.addPoint(goal)
								goal.onClose()
								onClose()
							}}
							style={{
								position: "absolute",
								right: "10px",
								top: "16px"
							}}
						/>
					</div>
				}
				titleStyle={{
					padding: 0,
					fontWeight:"normal",
					fontSize:"inherit",
					lineHeight:"inherit"
				}}
				bodyStyle={{ padding: 0 }}
			>
			</BottomSheets>
		)
	}
}
