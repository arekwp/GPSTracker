var sendHeadingEvent = function(e) {

	Ti.App.fireEvent('heading.changed', {
		val : (e.heading.trueHeading)
	});
};

var sendLocationEvent = function(e) {

	Ti.App.fireEvent('location.changed', e.coords);
};

exports.stopTracking = function() {
	Ti.Geolocation.removeEventListener('heading', sendHeadingEvent);
};

exports.startHeading = function() {

	Ti.Geolocation.getCurrentHeading(sendHeadingEvent); // returns cached value, maybe null if cache doesn't exist?

	Ti.Geolocation.addEventListener('heading', sendHeadingEvent);
};

exports.startLocation = function() {
	Ti.Geolocation.addEventListener('location', sendLocationEvent);
};

exports.startAll = function(){
	Ti.Geolocation.addEventListener('location', sendLocationEvent);
	Ti.Geolocation.addEventListener('heading', sendHeadingEvent);
};
