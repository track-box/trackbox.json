import React from 'react';
import BottomSheets from './material/BottomSheets';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import { CirclePicker } from 'react-color';

export default class TrackGoalEdit extends React.Component {
	state = {
		name: null
	}

	colors = [
		"#F06292", // pink300
		"#64B5F6", // blue300
		"#AED581", // lightgreen300
		"#FFB74D", // orange300
		"#BA68C8", // purple300
		"#7986CB", // indigo300
	]

	setName (name) {
		this.setState({ name: name })
	}

	
	render() {
		let { show, editing, goal, onClose, onEdit } = this.props
		if (!editing) this.state.name = goal.name

		let self = this	
		if (!show) return (<div></div>)

		return (
			<BottomSheets
				modal={false}
				open={show}
				onRequestClose={() => onClose()}
				bodyStyle={{ padding: 0 }}
				autoScrollBodyContent={true}
				title={
					<div style={{ padding: 24, position: "relative" }}>
						{this.state.name}
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
				}
				titleStyle={{
					padding: 0,
					fontWeight:"normal",
					fontSize:"inherit",
					lineHeight:"inherit"
				}}
			>
				<div style={{ height: (editing) ? 154 : 0 }}>
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
											id="name"
											value={this.state.name}
											onChange={(e) => {
												let name = e.target.value
												self.setName(name)
												goal.goal.setName(name)
											}}
										/>
									</ListItem>
									<ListItem
										leftIcon={<FontIcon className="material-icons">room</FontIcon>}
										innerDivStyle={{ paddingTop: 0, paddingBottom: 0 }}
									>
										<TextField
											id="coord"
											value={goal.data.coord}
											onChange={this.handleChange}
										/>
									</ListItem>	
									<ListItem
										leftIcon={<FontIcon className="material-icons">color_lens</FontIcon>}
										innerDivStyle={{ paddingTop: 8, paddingBottom: 6 }}
									>
										<CirclePicker
											colors={this.colors}
											color={goal.data.color.toLowerCase()}
											onChange={(color) => goal.goal.setColor(color.hex)}
										/>
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
