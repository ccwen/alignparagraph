var aligntext=function(t1,t2){
	var data1=t1.__data;
	var data2=t2.__data;

	//console.log(t1.__data.order,t2.__data.order)
	
	if (data2.order.length>data1.order.length) {
		var add=data2.order.length-data1.order.length;
		for (var i=0;i<add;i++) {
			data1.order.push(data1.order.length);
			data1.breakpoints.push(data1.raw.length);
		}
	} else if (data2.order.length<data1.order.length) {
		var add=data1.order.length-data2.order.length;
		for (var i=0;i<add;i++) {
			data2.order.push(data2.order.length);
			data2.breakpoints.push(data2.raw.length);
		}		
	}



	var arr=[];
	for (var i=0;i<data1.order.length;i++) {
		arr.push([data1.order[i],data2.order[i]]);
	}
	arr=arr.sort(function(d1,d2){ return d1[0]-d2[0] });

	data1.order=arr.map(function(a){return a[0]});
	data2.order=arr.map(function(a){return a[1]});

}
module.exports=aligntext;