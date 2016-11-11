/*
 * TrackboxTrack - trackbox track class based on Google Maps
 *
 */

/** @constructor */
function TrackboxTrack(url, trackboxMap) {
	this._url = url;
	this.trackboxMap = trackboxMap;
	this.map = trackboxMap.map;

	var self = this;
	this._loadJSON(url, function (data){
		self.data = data;
		self._init(data);
		self._initGoals(data.waypoints);
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



TrackboxTrack.prototype._init = function(json) {
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

	// summary
	var last = this.track.length - 1;
	var distance = google.maps.geometry.spherical.computeDistanceBetween(this.track[0].pos, this.track[last].pos);
	var time = this.track[last].time - this.track[0].time;
	var avg_speed = track_distance / time * 1000;

	this.summary = {
		min_lat: min_lat,
		max_lat: max_lat,
		min_lng: min_lng,
		max_lng: max_lng,
		min_alt: min_alt,
		max_alt: max_alt,
		max_speed: max_speed,
		avg_speed: avg_speed,
		track_distance: track_distance,
		distance: distance,
		time: time
	};

	this.map.fitBounds({
		east: max_lng,
		west: min_lng,
		north: max_lat,
		south: min_lat
	});
	this._drawPath();
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
	console.log(this.track.length);

	for (var i = 0; i < this.track.length; i++){
		var d = Math.pow(this.track[i].lat - lat, 2) + Math.pow(this.track[i].lng - lng, 2);
		dis.push({ i: i, d: d });
	};

	dis.sort(function (a, b) { return a.d - b.d });
	this.showInfoWindow(dis[0].i);
};


TrackboxTrack.prototype.showInfoWindow = function (t){
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


TrackboxTrack.prototype._initGoals = function(waypoints) {
	for (var key in waypoints){
		var waypoint = waypoints[key];

		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(waypoint.lat, waypoint.lon),
			map: this.map
		});
	}
};

