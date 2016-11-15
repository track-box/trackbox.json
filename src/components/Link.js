import React from 'react';
import Dialog from 'material-ui/Dialog';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';

export default class Link extends React.Component {

	render() {
		let { show, publicLink, editLink, onClose } = this.props

		const aStyle = {
			textDecoration: "none",
			color: "#4078c0",
			fontSize: "16px",
			margin: "8px"
		}

		return (
			<Dialog
				modal={false}
				open={show}
				onRequestClose={() => onClose()}
			>
				<div>
					<Chip>
						<Avatar icon={<FontIcon className="material-icons">public</FontIcon>} />
						公開用Link
					</Chip>
					<a href={publicLink} target={"_blank"} style={aStyle}>
						{publicLink}
					</a>
					<br /><br />
					<Chip>
						<Avatar icon={<FontIcon className="material-icons">edit</FontIcon>} />
						編集用Link
					</Chip>
					<a href={editLink} target={"_blank"} style={aStyle}>
						{editLink}
					</a>
				</div>
			</Dialog>
		)
	}
}
