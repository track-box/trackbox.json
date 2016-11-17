import React from 'react';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';
import FontIcon from 'material-ui/FontIcon';
import {lightGreen500} from 'material-ui/styles/colors';

export default class Save extends React.Component {
	render() {
		let { show, saving, title, onClose } = this.props

		if (saving) setTimeout(function(){ this.props.done(); }.bind(this), 10000)

		const aStyle = {
			textDecoration: "none",
			color: "#4078c0",
			fontSize: "16px",
			margin: "8px"
		}

		return (
			<Dialog
				title={title}
				modal={saving}
				open={show}
				onRequestClose={onClose}
				titleStyle={{ fontSize: 16, padding: 12, textAlign:"center" }}
				contentStyle={{ width: 96 }}
			>
				<div>
					{(() => {
						if (saving){
							return (<CircularProgress style={{ margin: "auto" }} />)
						}else{
							return (<FontIcon className="material-icons" style={{ fontSize:48 }} color={lightGreen500}>done</FontIcon>)
						}
					})()}
				</div>
			</Dialog>
		)
	}
}
