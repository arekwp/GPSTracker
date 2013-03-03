//AppMainView Component Constructor
function AppMainView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();

	var map = Ti.Map.createView({
		type : Ti.Map.STANDARD_TYPE,
		animate : true,
		regionFit : true,
		userLocation : true,
		region: {
			latitudeDelta: 0.01,
			longitudeDelta: 0.01
		}
	});

	self.addEventListener('location.changed', function(e) {
		map.setLocation = {
			latitude: e.latitude,
			longitude: e.longitude,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01
		}
	});

	self.add(map);

	return self;
}

module.exports = AppMainView;
