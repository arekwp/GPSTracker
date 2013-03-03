var createTableRow = function(item) {
	var tableRow = Ti.UI.createTableViewRow({
		hasChild : true,
		height : 70,
	});

	if ( typeof item == 'undefined') {

		var labelError = Ti.UI.createLabel({
			text : 'error', // TODO data i czas!
			color : '#fff'
		});

		tableRow.add(labelError);

		return tableRow;
	}

	tableRow.link = item.link;

	var labelDateTime = Ti.UI.createLabel({
		text : item.date, // TODO data i czas!
		color : '#fff'
	});

	var labelCityStart = Ti.UI.createLabel({
		text : item.city.start, // TODO nazwa miajsciowosci start
		color : '#fff'
	});

	var labelCityStop = Ti.UI.createLabel({
		text : item.city.stop, // TODO nazwa miajsciowosci koniec
		color : '#fff'
	});

	tableRow.add(labelDateTime);
	tableRow.add(labelCityStart);
	tableRow.add(labelCityStop);

	return tableRow;
};

function RouteListView() {

	var self = Ti.UI.createView();

	var table = Ti.UI.createTableView();
	self.add(table);

	table.addEventListener('click', function(e) {
		self.fireEvent('route.selected', e);
	});

	var now = new Date();

	var routes = [];

	var route1 = [];

	routes.push({
		date: String.format(new Date()),
		city: 'startAAAAA'
	});

	routes.push({
		date: String.format(new Date()),
		city: 'startBBBB'
	});

	var rows = [];

	if (Object.prototype.toString.apply(routes) === '[object Array]') {
		for (var i = 0; i < routes.length; i++) {
			Ti.API.info('route: ' + JSON.stringify(routes[i]));
			rows.push(createTableRow(routes[i]));
		}
		table.setData(rows);
	}

	// TODO read routes and display them using createTableRow

	return self;
}

module.exports = RouteListView;
