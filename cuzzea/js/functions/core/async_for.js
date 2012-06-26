/*
 * params:
 * 	object: 		the array to parse
 *	settings_object:
 *		cbk:			function to call whenwhen object is found in array
 *							params: i,object[i]
 *		limit_calback:	function to call when limit is reached
 *							params: i, object_length
 *		end_cbk:		function to call when loop is finished
 *							params: none
 *		limit:			number of iteration before breacking the for loop
 *							default: object.length/100
 *		timeout:		time until start of the for loop(ms)
 *							default: 1
 *		start:			the index from where to start the for loop
 *							default: 0
 * exemple:
 * 
 * var a = [];
 * a.length = 1000;
 * async_for_each(a,{
 *	limit_callback:function(i,l){console.log("loading %s/%s - %s%",i,l,Math.round(i*100/l))}
 * });
 *
 */

function async_for_each(object,settings){
    var l=object.length;
	settings.limit = settings.limit || Math.round(l/100);
	settings.start = settings.start || 0;
	settings.timeout = settings.timeout || 1;
	for(var i=settings.start;i<l;i++){
		if(i-settings.start>=settings.limit){
			setTimeout(function(){
				settings.start = i;
				async_for_each(object,settings)
			},settings.timeout);
			settings.limit_callback ? settings.limit_callback(i,l) : null;
			return false;
		}else{
			settings.cbk ? settings.cbk(i,object[i]) : null;
		}
	}
	settings.end_cbk?settings.end_cbk():null;
	return true;
}
