import React from 'react';
import BottomSheets from './material/BottomSheets';


export default class TrackGoal extends React.Component {
	render() {
		let { show, goal, onClose } = this.props

		return (
			<BottomSheets
				modal={false}
				open={show}
				onRequestClose={() => onClose()}
			>
				<div>
					{goal.name}
					<span style={{ marginLeft:"24px", fontSize:"12px" }}>
						{goal.sub}
					</span>
				</div>
			</BottomSheets>
		)
	}
}
