//Application Window Component Constructor
function ApplicationWindow() {

	var AppMainView = require('ui/common/AppMainView');
	var mainView = new AppMainView();

	var InfoView = require('ui/common/InfoView');
	var infoView = new InfoView();

	var geo = require('ui/common/Geo');

	var CompassView = require('ui/common/CompassView');
	var compassView = new CompassView();

	// -> mapa, tracking itp {polozenie gps, predkosc}
	geo.startLocation();
	// -> kompas
	geo.startHeading();

	var self = Ti.UI.createWindow({
		backgroundColor : '#ffffff',
		navBarHidden : true,
		exitOnClose : true
	});

	self.activity.onCreateOptionsMenu = function(e) {
		var menu = e.menu;
		var miSettings = menu.add({
			title : L('menu_settings'),
		});

		miSettings.addEventListener("click", function(e) {
			var settings_window = require('SettingsWindow');
			new settings_window().open();
		});

		var miClose = menu.add({
			title : L('menu_close'),
		});

		miClose.addEventListener("click", function(e) {
			self.close();
			geo.stopTracking();
		});
		
		var miRoutes = menu.add({
			title : L('menu_routes'),
		});

		miRoutes.addEventListener("click", function(e) {
			// TODO open routes list
			var RouteListView = require('ui/common/RouteListView');
			var routes = new RouteListView();
			
			var routesListWindow = Ti.UI.createWindow({
				title: 'Routes',
				backgroundColor:'#fff',
				exitOnClose : false
			});
			
			routesListWindow.add(routes);
			
			self.addEventListener('route.chosen', function(e){
				// TODO wyswietlenie trasy na mapie
			});
			
			routesListWindow.open();
		});
	}

	// obsluga cyklu zycia aktywnosci -> niszczenie i wznawianie
	self.addEventListener('destroy', function(e) {
		geo.stopTracking();
	});
	
	self.addEventListener('resume', function(e){
		geo.stopTracking();
		geo.startAll();
	});

	self.orientationModes = [Ti.UI.PORTRAIT];

	mainView.opacity = 0.7;
	self.setKeepScreenOn(true);

	self.add(infoView);

	self.add(mainView);
	self.add(compassView);

	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
