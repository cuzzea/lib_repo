/*
 * params:
 * 	object: 		the array to parse
 *	cbk:			function to call whenwhen object is found in array
 *						params: i,object[i]
 *	limit_calback:	function to call when limit is reached
 *						params: i, object_length
 *	end_cbk:		function to call when loop is finished
 *						params: none
 *	limit:			number of iteration before breacking the for loop
 *						default: object.length/100
 *	timeout:		time until start of the for loop(ms)
 *						default: 1
 *	start:			the index from where to start the for loop
 *						default: 0
 * exemple:
 * 
 * var a = [];
 * a.length = 1000;
 * async_for_each(a,function(){},function(i,l){console.log("locading %s/%s - %s%",i,l,Math.round(i*100/l))});
 *
 */

function async_for_each(object,cbk,limit_callback,end_cbk,limit,timeout,start){
    var l=object.length;
	limit = limit || Math.round(l/100);
	start = start || 0;
	timeout = timeout || 1;
	for(var i=start;i<l;i++){
		if(i-start>=limit){
			setTimeout(function(){
				async_for_each(object,cbk,limit_callback,end_cbk,limit,timeout,i)
			},timeout);
			limit_callback(i,l);
			return false;
		}else{
			cbk(i,object[i]);
		}
	}
	end_cbk?end_cbk():null;
	return true;
}
