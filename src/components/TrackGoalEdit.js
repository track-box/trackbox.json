import React from 'react';
import BottomSheets from './material/BottomSheets';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import { Circle } from 'react-color';

export default class TrackGoalEdit extends React.Component {
	render() {
		let { show, editing, goal, onClose, onEdit } = this.props
	
		if (!show) return (<div></div>)

		return (
			<BottomSheets
				modal={false}
				open={show}
				onRequestClose={() => onClose()}
				bodyStyle={{ padding: 0 }}
			>
				<div>
					<div style={{ padding: 24 }}>
						{goal.name}
						<span style={{ marginLeft:"24px", fontSize:"12px" }}>
							{goal.sub}
						</span>
						<RaisedButton
							primary={true}
							onTouchTap={onEdit}
							icon={<FontIcon className="material-icons">edit</FontIcon>}
							style={{
								position: "absolute",
								right: "10px",
								top: "16px"
							}}
						/>
					</div>
					{(() => {
						if (editing){
							return (
							<div>
								<Divider />
								<List>
									<ListItem
										leftIcon={<FontIcon className="material-icons">label</FontIcon>}
										innerDivStyle={{ paddingTop: 0, paddingBottom: 0 }}
									>
										<TextField
											value={goal.name}
											onChange={this.handleChange}
										/>
									</ListItem>
									<ListItem
										leftIcon={<FontIcon className="material-icons">room</FontIcon>}
										innerDivStyle={{ paddingTop: 0, paddingBottom: 0 }}
									>
										<TextField
											id="coord"
											value={goal.name}
											onChange={this.handleChange}
										/>
									</ListItem>
									<ListItem
										leftIcon={<FontIcon className="material-icons">color_lens</FontIcon>}
									>
									</ListItem>
								</List>
								<Divider />
								<List>
									<ListItem
										primaryText="Delete"
										leftIcon={<FontIcon className="material-icons">delete</FontIcon>}
									>
									</ListItem>
								</List>
							</div>
							)
						}
					})()}
					</div>
			</BottomSheets>
		)
	}
}
