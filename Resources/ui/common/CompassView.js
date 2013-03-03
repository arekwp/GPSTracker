function CompassView() {

	var self = Ti.UI.createView({
		top : '2%',
		left : '80%',
		width : 70,
		height : 70,
		borderRadius : 35
	});

	var path = Titanium.Filesystem.resourcesDirectory;

	var imgView = Ti.UI.createImageView({
		image : path + 'images/compass-needle.png'
	});

	Ti.App.addEventListener('heading.changed', function(e) {
		if (e) {
			var rot = Ti.UI.create2DMatrix();
			rot = rot.rotate(360 - e.val);
			self.transform = rot;
		}
	});

	self.add(imgView);

	return self;
}

module.exports = CompassView;
