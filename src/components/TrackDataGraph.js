import React from 'react'
import Highcharts from 'react-highcharts'


const config = {
	chart: {
		zoomType: 'x',
		height: 280,
	    spacingTop: 20,
	    spacingBottom: 4
	},
	title: {
		text: ""  
	},
	xAxis: {
		type: 'datetime',
	},
	yAxis: [{
		title: "",
		labels: {
			align: "left",
			x: 0,
			y: -2,
			style: { "font-size": 7 }
		},
		min: 0
	},{
		title: "",
		labels: {
			align: "left",
			x: -10,
			y: -2,
			style: { "font-size": 7 }    
		},
		opposite: true,
		min: 0,
		minRange: 10
	}],
	legend: {
	},
	credits: {
		enabled: false  
	},
	tooltip: {
		xDateFormat: '%H:%M:%S',
		shared: true
	},

	series: [{
		type: 'line',
		name: 'altitude(m)',
		color: "#3498db",
		yAxis: 0,
		marker: {
			enabled: false
		},
		data: [[0, 100]]
	},{
		type: 'line',
		name: 'speed(m/s)',
		color: "#e74c3c",
		yAxis: 1,
		marker: {
			enabled: false
		},
		data: [[0, 10]]
	}],
}


const TrackDataGraph = ({ data }) => {
	return (
		<Highcharts config = {config} ></Highcharts>
	)
}

export default TrackDataGraph
