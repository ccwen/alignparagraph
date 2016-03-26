var reorder=function(items,order) {
	return items.map(function(item,idx){
			return items[order[idx]]
	});
}
var get=function(){
	var out=[],prev=0;
	for (var i=0;i<this.breakpoints.length;i++) {
		out.push([out.length,this.raw.substring(prev,this.breakpoints[i])]);
		prev=this.breakpoints[i];
	}
	out.push([out.length,this.raw.substr(this.breakpoints[this.breakpoints.length-1])]);

	return reorder(out,this.order);
}
var init=function(sep){
	this.breakpoints=[];
	this.order=[];
	var i=0;
	this.raw.replace(sep,function(m,idx){
		this.breakpoints.push(idx+m.length);
		this.order.push(i++);
	}.bind(this));
	this.order.push(i);
}

var breakup=function(r,at){
		var rowstart=this.breakpoints[r-1]||0;
		var newbreakpoint=rowstart+at;

		this.breakpoints.splice(r,0,newbreakpoint);

		var i=this.order.indexOf(r);
		this.order=this.order.map(function(o){
			return o>r?o+1:o;
		})
		this.order.splice(i+1,0,this.order[i]+1);
}

var move=function(r,direction) {
		var i=this.order.indexOf(r);
		var t=0;
		if (direction===-1 && i>0) {
				t=this.order[i-1];
				this.order[i-1]=this.order[i];
				this.order[i]=t;
		} else if (direction===1 && i<this.order.length-1) {
				t=this.order[i+1];
				this.order[i+1]=this.order[i];
				this.order[i]=t;
		}
}

var join=function(r){
		if (r===0)return;
		var i=this.order.indexOf(r);
		this.order.splice(i,1);

		this.breakpoints.splice(r-1,1);
		for (var i=0;i<this.order.length;i+=1) {
			if (this.order[i]>r) this.order[i]-=1;
		}
}
var setOrder=function(order){
	this.order=order;
}
module.exports={init:init,get:get,setOrder:setOrder,breakup:breakup,move:move,join:join};