$(document).ready(function(){
	init();
});

function init() {
	var log = console.log;
	log('init');
	//var snow = new Snow({ target:'body', intensity:1, pause:true });
	var snow = new Snow({paused:true});
}