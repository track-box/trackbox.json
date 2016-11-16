/*
 * TrackboxGoals - trackbox goals management class
 *
 * require:
 *  	google maps
 *  	proj4
 *  	TrackboxGoal
 *
 */

/** @constructor */
function TrackboxGoals(map, goals) {
	this.map = map;
	this._goals = {};
	
	if (goals) {
		for (var key in goals){
			var goal = goals[key];

			this._addGoal(key, goal.lat, goal.lon, goal);
		}
	}
}


TrackboxGoals.prototype.setMapDef = function(map_def, callback) {
	this._map_def = map_def;

	var self = this;
	this._loadJSON(map_def.waypoint_url, function (data) {
		self._waypoints = data.waypoints;
		if (callback) callback();
	});

	this._utm = map_def.utm;
	this._utm.xbase = Math.floor(this._utm.xmax / 100000) * 100000;
	this._utm.ybase = Math.floor(this._utm.ymax / 100000) * 100000;
};


TrackboxGoals.prototype._loadJSON = function(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('get', url, true);
	xhr.onload = function(){
		data = JSON.parse(this.responseText);
		callback(data);
	};
	xhr.send(null);
};

TrackboxGoals.prototype.addGoal = function(x) {
	if (!x){
		return;
	}

	if (this._goals[x]){
		return;
	}

	if (x.length == 3){
		if (this._waypoints[x]){
			var w = this._waypoints[x];
			this._addGoal(x, w.lat, w.lon, { number: x });
			this._showGoal(x);

		}else{
			window.trackboxReact.showSnackbar("not found");
		}
	}else if (x.length == 8){
		var latlon = this._getDigitLatLon(x);
		var num = Object.keys(this._goals).length + "";
		this._addGoal(num, latlon.lat, latlon.lon, { coord: x });
		this._showGoal(num);

	}else{
		window.trackboxReact.showSnackbar("error!");
	}
};

TrackboxGoals.prototype._getDigitLatLon = function(digit) {
	var dx = parseInt(digit.substr(0, 4));
	var dy = parseInt(digit.substr(4, 4));

	var x = this._utm.xbase + dx * 10;
	var y = this._utm.ybase + dy * 10;

	if (x > this._utm.xmax) x -= 1000000;
	if (y > this._utm.ymax) y -= 1000000;

	var utm = "+proj=utm +zone=" + this._utm.zone;
	var wgs84 = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";

	var pos = proj4(utm, wgs84, [x, y]);

	return { lat: pos[1], lon: pos[0] };
};

TrackboxGoals.prototype._getDigit = function(lat, lon) {
	var utm = "+proj=utm +zone=" + this._utm.zone;
	var wgs84 = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";

	var pos = proj4(wgs84, utm, [lon, lat]);

	var x = Math.floor(pos[0] / 10);
	var y = Math.floor(pos[1] / 10);

	var dx = x % 10000;
	var dy = y % 10000;

	return "" + dx + dy;
};

TrackboxGoals.prototype._addGoal = function(name, lat, lon, goal_data) {
	var pos = new google.maps.LatLng(lat, lon);
	var marker = new TrackboxGoal(name, pos, goal_data, this.map);

	this._goals[name] = {
		pos: pos,
		marker: marker
	};

	if (goal_data.number) this._goals[name].number = goal_data.number;
	if (goal_data.coord) this._goals[name].coord = goal_data.coord;
};



TrackboxGoals.prototype._showGoal = function(name) {
	if (this._goals[name]){
		this.map.setZoom(14);
		this.map.panTo(this._goals[name].pos);
	}
};


TrackboxGoals.prototype.deleteGoal = function(name) {
	if (this._goals[name]){
		var goal = this._goals[name];

		goal.marker.setMap(null);

		delete this._goals[name];
	}
};




