import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const styles = {
	table: {
		maxWidth: "400px",
		margin: "auto"
	}
};

export default class TrackDataTable extends React.Component {
	state = {
		date: "2016.10.30",
		time: "00:00:00",
		track: "12.2",
		distance: "10.2",
		avgSpeed: "3.2",
		maxSpeed: "7.2",
		minAltitude: "3",
		maxAltitude: "451"
	};

	render() {
		return (
			<Table selectable={false} height={"280px"} style={styles.table}>
				<TableBody displayRowCheckbox={false}>
					<TableRow style={styles.row}>
						<TableRowColumn>Date</TableRowColumn>
						<TableRowColumn>{this.state.date}</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Time</TableRowColumn>
						<TableRowColumn>{this.state.time}</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Track</TableRowColumn>
						<TableRowColumn>{this.state.track} km</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Distance</TableRowColumn>
						<TableRowColumn>{this.state.distance} km</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Avg Speed</TableRowColumn>
						<TableRowColumn>{this.state.avgSpeed} m/s</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Max Speed</TableRowColumn>
						<TableRowColumn>{this.state.maxSpeed} m/s</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Min Altitude</TableRowColumn>
						<TableRowColumn>{this.state.minAltitude} m</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Max Altitude</TableRowColumn>
						<TableRowColumn>{this.state.maxAltitude} m</TableRowColumn>
					</TableRow>
				</TableBody>
			</Table>
		);
	}
}
