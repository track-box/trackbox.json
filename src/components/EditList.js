import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import {grey800} from 'material-ui/styles/colors';


const styles = {
	item: {
		color: grey800
	}
};

const EditList = (props) => (
	<div>
		<List>
			<ListItem primaryText="Add goal" 
				innerDivStyle={styles.item}
				leftIcon={
					<FontIcon className="material-icons">room</FontIcon>
				}
				onTouchTap={() => {
					props.showAddGoal()
					props.onSelected()
				}}
			/>
		</List>
		<Divider />
		<List>
			<ListItem primaryText="Save" innerDivStyle={styles.item} leftIcon={
				<FontIcon className="material-icons">save</FontIcon>
			} />
			<ListItem primaryText="Link" innerDivStyle={styles.item} leftIcon={
				<FontIcon className="material-icons">link</FontIcon>
			} />
		</List>
		<Divider />
		<List>
			<ListItem primaryText="Rename" innerDivStyle={styles.item} leftIcon={
				<FontIcon className="material-icons">edit</FontIcon>
			} />
			<ListItem primaryText="Select map"
				innerDivStyle={styles.item}
				leftIcon={
					<FontIcon className="material-icons">map</FontIcon>
				} 
				onTouchTap={() => {
					props.showSelectMap()
					props.onSelected()
				}}
			/>
		</List>
	</div>
)

export default EditList
