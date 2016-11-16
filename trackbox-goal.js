/*
 * TrackboxGoals - trackbox goal view class
 *
 * require:
 *  	google maps
 *
 */
TrackboxGoal.prototype = new google.maps.OverlayView();

function TrackboxGoal(name, pos, goal, map) {
	this._name = name;
	this._pos = pos;
	this._data = goal;
	this.map = map;
	this.setMap(map);
};


TrackboxGoal.prototype.onAdd = function() {
	this._div = document.createElement('div');

	var show_name = this._name;
	var width = 8 * this._name.length;

	if (this._name.length == 1) width = 12;
	if (this._name.length > 6) {
		width = 48;
		show_name = this._name.substr(0, 6);
	}

	this._div.style.position = 'absolute';
	this._div.style.width = width + 'px';
	this._div.style.height = '32px';

	this._div.innerHTML = 
		'<div style="width: ' + width + 'px; font-size:12px; text-align:center; line-height:1; background-color: #f06292; color: #212121; padding: 1px; border: 1px solid #777; box-shadow: 0 1px 4px -1px rgba(0,0,0,.3)">' + show_name + '</div>' +
	'<svg width="' + width + '" height="14">' +
		'<line x1="' + width/2 + '" y1="0" x2="' + width/2 + '" y2="8" stroke="#111" stroke-width="1" />' +
		'<circle cx="' + width/2 + '" cy="10" r="3" stroke="#e91e63" stroke-width="2" fill="none" />' +
		'</svg>';

	var self = this;
	var sub = (this._data.coord) ? this._data.coord : '';
	this._width = width;

	this._div.onclick = function (e) {
		e.preventDefault();
		window.trackboxReact.showTrackGoal({ name: self._name, sub: sub, data: self._data });
		return false;
	};

	var panes = this.getPanes();
	panes.overlayMouseTarget.appendChild(this._div);
};

TrackboxGoal.prototype.draw = function() {
	var pos = this._getPosFromLatLng(this._pos);
	this._div.style.left = (pos.x - this._width/2) + 'px';
	this._div.style.top = (pos.y - 28) + 'px';
};

TrackboxGoal.prototype.onRemove = function() {
	if (this._div && this._div.parentNode) {
		this._div.parentNode.removeChild(this._div);
		this._div = null;
	}
};

TrackboxGoal.prototype._getPosFromLatLng = function(latlng) {
	return this.getProjection().fromLatLngToDivPixel(latlng);
};
