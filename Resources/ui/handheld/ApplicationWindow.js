//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	var AppMainView = require('ui/common/AppMainView');
	var mainView = new AppMainView();
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
	
	self.add(mainView);
		
	
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
