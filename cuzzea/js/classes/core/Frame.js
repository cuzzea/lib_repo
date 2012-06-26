/*
 * Class to handel frame
 * implements eventListners
 */
var Frame = function(_ms){
	var listners={},
		timer,
		can_run,
		ms = _ms ? _ms : 200,
		step=function(){
			if(!can_run) return ;
			fireEvent(Frame.ON_ENTER);
			timer = setTimeout(step.bind(this),ms);
			fireEvent(Frame.ON_EXIT);
		},
		pause=function(){
			can_run = false;
			clearTimeout(timer);
		},
		start=function(){
			can_run = true;
			step();
		},
		fireEvent=function(type){
			if(!listners[type]) return ;
			for(var object in listners[type]) listners[type][object].call(object);
		};
	this.addListner = function(object,type,cbk){
		if(!listners[type]) listners[type] = {};
		listners[type][object]=cbk;
	};
	this.removeListner = function(object,type,cbk){
		delete listners[type][object];
	};
	this.pause = function(){pause()};
	start();
}
Frame.ON_ENTER = "on_enter";
Frame.ON_EXIT  = "on_exit";