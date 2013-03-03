function InfoView() {

	var self = Ti.UI.createView({
		borderWidth : 1,
		color : 'white',
		borderColor : 'black',
		backgroundColor : 'black',
		width : '50%',
		height : 80,
		top : '2%',
		left : '2%'
	});

	var labelHeading = Ti.UI.createLabel({
		font : {
			fontSize : '14dip'
		},
		top : '1%',
		width : '100%',
		height : '30%'
	});

	var labelSpeed = Ti.UI.createLabel({
		font : {
			fontSize : '14dip'
		},
		top : '30%',
		width : '100%',
		height : '30%'
	});

	var labelDistance = Ti.UI.createLabel({
		font : {
			fontSize : '14dip'
		},
		top : '60%',
		width : '100%',
		height : '30%'
	});

	Ti.App.addEventListener('heading.changed', function(e) {
		if (typeof e.val != 'undefined') {
			labelHeading.text = String.format(L('label_heading'), e.val.toFixed(2));
		}
	});

	Ti.App.addEventListener('location.changed', function(e) {
		Ti.API.info('locatin changed e: ' + JSON.stringify(e));
		if (e) {
			labelSpeed.text = String.format(L('label_speed'), e.speed.toFixed(2));
			labelDistance.text = String.format(L('label_distance'), '0.0');
		}
	});

	self.add(labelHeading);
	self.add(labelSpeed);
	self.add(labelDistance);

	return self;
}

module.exports = InfoView;
