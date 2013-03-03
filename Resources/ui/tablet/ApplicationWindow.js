//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	var AppMainView = require('ui/common/AppMainView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
		
	//construct UI
	var firstView = new AppMainView();
	self.add(firstView);
	
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
