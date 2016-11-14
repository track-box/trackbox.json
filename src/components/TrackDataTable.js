import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'


const styles = {
	table: {
		maxWidth: "400px",
		margin: "auto"
	}
}

const TrackDataTable = ({ data }) => (
	<Table selectable={false} height={"240px"} style={styles.table}>
		<TableBody displayRowCheckbox={false}>
			<TableRow>
				<TableRowColumn>Title</TableRowColumn>
				<TableRowColumn>{data.name}</TableRowColumn>
			</TableRow>
			<TableRow>
				<TableRowColumn>Date</TableRowColumn>
				<TableRowColumn>{data.date}</TableRowColumn>
			</TableRow>
			<TableRow>
				<TableRowColumn>Time</TableRowColumn>
				<TableRowColumn>{data.time}</TableRowColumn>
			</TableRow>
			<TableRow>
				<TableRowColumn>Track</TableRowColumn>
				<TableRowColumn>{data.track} km</TableRowColumn>
			</TableRow>
			<TableRow>
				<TableRowColumn>Distance</TableRowColumn>
				<TableRowColumn>{data.distance} km</TableRowColumn>
			</TableRow>
			<TableRow>
				<TableRowColumn>Avg Speed</TableRowColumn>
				<TableRowColumn>{data.avgSpeed} m/s</TableRowColumn>
			</TableRow>
			<TableRow>
				<TableRowColumn>Max Speed</TableRowColumn>
				<TableRowColumn>{data.maxSpeed} m/s</TableRowColumn>
			</TableRow>
			<TableRow>
				<TableRowColumn>Min Altitude</TableRowColumn>
				<TableRowColumn>{data.minAltitude} m</TableRowColumn>
			</TableRow>
			<TableRow>
				<TableRowColumn>Max Altitude</TableRowColumn>
				<TableRowColumn>{data.maxAltitude} m</TableRowColumn>
			</TableRow>
		</TableBody>
	</Table>
)

export default TrackDataTable
