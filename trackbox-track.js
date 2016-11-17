/*
 * TrackboxTrack - trackbox track class based on Google Maps
 *
 */

/** @constructor */
function TrackboxTrack(url, div_id, options) {
	this._url = url;
	this._host = "http://track.box"
	
	window.trackboxReact.showLoading();

	var self = this;
	this._loadJSON(url, function (data){
		self.data = data;

		var trackboxMap = new TrackboxMap(data.map, div_id);
		self.trackboxMap = trackboxMap;
		self.map = trackboxMap.map;

		self._init(data);
		self.setTitle(data.name);
		
		self.goals = new TrackboxGoals(self.map, data.goals);

		if (options && options.edit){
			self.longtouch = new TrackboxLongTouch(self.map, self.goals, div_id, function (goal){
				window.trackboxReact.showTrackGoalAdd(goal);
			});

			if (data.map){
				window.trackboxReact.setMapName(data.map.name);
				self.goals.setMapDef(data.map);
			}
		}
		
		window.trackboxReact.hideLoading();
	});
}


TrackboxTrack.prototype._loadJSON = function(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('get', url, true);
	xhr.onload = function(){
		data = JSON.parse(this.responseText);
		callback(data);
	};
	xhr.send(null);
};


/** @public for UI */
TrackboxTrack.prototype.setTitle = function(name) {
	this.data.name = name;
	this.trackboxMap.setTitle(name);
};

TrackboxTrack.prototype.showMarker = function (t){
	if (!this._marker) {
		this._marker = new google.maps.Marker();
	}

	this._marker.setPosition(this.track[t].pos);
	this._marker.setMap(this.map);
};

TrackboxTrack.prototype.hideMarker = function (){
	if (this._marker) this._marker.setMap(null);
};

TrackboxTrack.prototype.addGoal = function(x) {
	this.goals.addGoal(x);
};

TrackboxTrack.prototype.addPoint = function(x) {
	this.goals.addPoint(x);
};

TrackboxTrack.prototype.setMap = function(map_name) {
	window.trackboxReact.showLoading();

	if (map_name == "none"){
		var json = {};
		this.data.map = json;
		this.trackboxMap.setMapDef(json);
		this.trackboxMap.removeOverlay();
		this.goals.setMapDef(json);
		window.trackboxReact.hideLoading();

	}else{
		var self = this;
		var url = "https://track-box.github.io/trackbox-map/json/" + map_name.toLowerCase() + ".json";
		this._loadJSON(url, function(json){
			self.data.map = json;

			self.trackboxMap.setMapDef(json);
			self.goals.setMapDef(json, function(){
				window.trackboxReact.hideLoading();
			});
		});
	}
};

/** @private */
TrackboxTrack.prototype._init = function(json) {
	this._initTrackData(json);
	this._calculateDistances();
	this._calculateSummary();

	this.map.fitBounds({
		east: this.summary.max_lng,
		west: this.summary.min_lng,
		north: this.summary.max_lat,
		south: this.summary.min_lat
	});

	this._drawPath();

	this._setTrackData();
	this._setTrackGraph();
};

TrackboxTrack.prototype._initTrackData = function(json) {
	this.track = [];
	var min_lat = json.track[0][0];
	var max_lat = json.track[0][0];
	var min_lng = json.track[0][1];
	var max_lng = json.track[0][1];
	var min_alt = json.track[0][2];
	var max_alt = json.track[0][2];

	for (var i = 0; i < json.track.length; i++){
		var trkp = json.track[i];

		var lat = trkp[0];
		if (lat < min_lat) min_lat = lat;
		if (lat > max_lat) max_lat = lat;
		var lng = trkp[1];
		if (lng < min_lng) min_lng = lng;
		if (lng > max_lng) max_lng = lng;
		var alt = trkp[2];
		if (alt < min_alt) min_alt = alt;
		if (alt > max_alt) max_alt = alt;

		this.track.push({
			lat: lat,
			lng: lng,
			pos: new google.maps.LatLng(trkp[0], trkp[1]),
			alt: alt,
			time: trkp[3] * 1000
		});
	}
	
	this.summary = {
		min_lat: min_lat,
		max_lat: max_lat,
		min_lng: min_lng,
		max_lng: max_lng,
		min_alt: min_alt,
		max_alt: max_alt
	};
};


TrackboxTrack.prototype._calculateDistances = function() {
	// calculate speed and distance
	var track_distance = 0;
	var speed_1 = 0, speed_2 = 0;
	var max_speed = 0;

	for (var i = 0; i < this.track.length - 1; i++){
		var d = google.maps.geometry.spherical.computeDistanceBetween(this.track[i].pos, this.track[i+1].pos);
		
		var t_i = this.track[i].time;
		var dt = this.track[i+1].time - t_i;

		// bugfix: same time track point
		if (dt == 0) continue;
		
		var speed = (d / dt * 1000 + speed_1 + speed_2) / 3;
		speed_1 = speed_2;
		speed_2 = speed;
		track_distance += d;
		
		if (speed > max_speed) max_speed = speed;
		this.track[i].speed = speed;
			
		var heading = google.maps.geometry.spherical.computeHeading(this.track[i].pos, this.track[i+1].pos);
		if (heading < 0) heading += 360;
		this.track[i].heading = heading;
	}

	this.summary.max_speed = max_speed;
	this.summary.track_distance = track_distance;
}


TrackboxTrack.prototype._calculateSummary = function() {
	// summary
	var last = this.track.length - 1;
	var distance = google.maps.geometry.spherical.computeDistanceBetween(this.track[0].pos, this.track[last].pos);
	var time = this.track[last].time - this.track[0].time;
	var avg_speed = this.summary.track_distance / time * 1000;

	this.summary.distance = distance;
	this.summary.avg_speed = avg_speed;
	this.summary.time = time;
};

			
TrackboxTrack.prototype._setTrackData = function (){
	function pad(n) { return n<10 ? '0'+n : n; }

	var date = new Date(this.track[0].time);
	var date_str = date.getFullYear() + "." + pad(date.getMonth() + 1) + "." + pad(date.getDate());

	var t = new Date(this.summary.time);
	var time_str = pad(t.getUTCHours()) + ":" + pad(t.getUTCMinutes()) + ":" + pad(t.getUTCSeconds());

	var trackData = {
		name: this.data.name,
		date: date_str,
		time: time_str,
		track: Math.round(this.summary.track_distance / 100) / 10, // 0.0 km
		distance: Math.round(this.summary.distance / 100) / 10, // 0.0 km
		avgSpeed: Math.round(this.summary.avg_speed * 10) / 10, // 0.0 m/s
		maxSpeed: Math.round(this.summary.max_speed * 10) / 10, // 0.0 m/s
		minAltitude: Math.round(this.summary.min_alt), // 0 m
		maxAltitude: Math.round(this.summary.max_alt), // 0 m
		publicLink: this._host + '/track/' + this.data.track_id,
		editLink: this._host + '/edit/' + this._edit_id
	};

	window.trackboxReact.setTrackData(trackData);
};


TrackboxTrack.prototype._setTrackGraph = function (){
	var alt = [], speed = [];

	for (var i = 0; i < this.track.length; i++){
		var t = this.track[i].time + 9 * 3600 * 1000;
		alt.push([t, this.track[i].alt]);
		speed.push([t, Math.round(this.track[i].speed * 10) / 10]);
	}

	window.trackboxReact.setTrackGraph({ alt: alt, speed: speed });
};


TrackboxTrack.prototype._drawPath = function (){
	var max_alt_up = Math.ceil(this.summary.max_alt/100) * 100;
	var min_alt = this.summary.min_alt;
	var alt_range = max_alt_up - min_alt;
	
	for (var i = 0; i < this.track.length - 1; i++){
		var color = this._gradient((alt_range == 0) ? 0 : (this.track[i].alt - min_alt) / alt_range);

		var polyline = new google.maps.Polyline({
			path: [ this.track[i].pos, this.track[i+1].pos ],
			strokeColor: color,
			strokeWeight: 4,
			strokeOpacity: 1,
			map: this.map
		});

		var self = this;
		google.maps.event.addListener(polyline, 'click', function(e){
			self.showInfoWindowFromLatLng(e.latLng.lat(), e.latLng.lng());
		});
	}
};


TrackboxTrack.prototype.showInfoWindowFromLatLng = function (lat, lng){
	var dis = [];
	for (var i = 0; i < this.track.length; i++){
		var d = Math.pow(this.track[i].lat - lat, 2) + Math.pow(this.track[i].lng - lng, 2);
		dis.push({ i: i, d: d });
	}	

	dis.sort(function (a, b) { return a.d - b.d });
	this.showInfoWindow(dis[0].i);
};


TrackboxTrack.prototype.showInfoWindow = function (t){
	if (this._preventInfoWindow) return;
	if (this._infoWindow) this._infoWindow.close();

	function pad(n) { return n<10 ? '0'+n : n; }
	var date = new Date(this.track[t].time);

	var content = '<div class="track-info-window" style="font-size:12px; line-height:16px;">' +
		pad(date.getHours()) + ":" + pad(date.getMinutes()) + ":" + pad(date.getSeconds()) + "<br>" +
		"altitude: " + Math.round(this.track[t].alt) + " m<br>" +
		"speed:    " + Math.round(this.track[t].speed*10)/10 + " m/s<br>" +
		"heading:  " + Math.round(this.track[t].heading) + "°" +
		'</div>';

	this._infoWindow = new google.maps.InfoWindow({
		content: content,
		position: this.track[t].pos
	});
	this._infoWindow.open(this.map);
};

TrackboxTrack.prototype.closeInfoWindow = function (){
	if (this._infoWindow) this._infoWindow.close();
};

TrackboxTrack.prototype.preventInfoWindow = function (){
	this._preventInfoWindow = true;
	var self = this;
	setTimeout(function(){ self._preventInfoWindow = false; }, 200);
};

TrackboxTrack.prototype._gradient = function(x) {
	var grad = [
		{ value:0.00, r:0,   g:0,   b:255 },
		{ value:0.25, r:0,   g:255, b:255 },
		{ value:0.50, r:0,   g:255, b:0   },
		{ value:0.75, r:255, g:255, b:0   },
		{ value:1.00, r:255, g:0,   b:0   }
	];

	var pivot;
	for (pivot = 1; pivot < grad.length; pivot++){
		if ( x <= grad[pivot].value ){
			break;
		}
	}

	var l = grad[pivot-1];
	var r = grad[pivot];

	var delta = (x - grad[pivot-1].value) / (grad[pivot].value - grad[pivot-1].value);

	var color = {
		r: Math.round( (r.r - l.r) * delta + l.r ),
		g: Math.round( (r.g - l.g) * delta + l.g ),
		b: Math.round( (r.b - l.b) * delta + l.b )
	};

	return "#" + this._doubleHex(color.r) +
		this._doubleHex(color.g) + this._doubleHex(color.b);
};

TrackboxTrack.prototype._doubleHex = function(x) {
	return ( x < 16 ) ? "0" + x.toString(16) : x.toString(16);
};


