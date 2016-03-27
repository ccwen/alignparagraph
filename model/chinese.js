var raw=require('../data/chinese');
var breaktext=require("./breaktext");
var data={
	breakpoints:[],
	order:[],
	raw:raw
}
breaktext.init.call(data,/[。！？」]+/g);

module.exports={
	name:"chinese",
	__data:data,
	setOrder:breaktext.setOrder.bind(data),
	get:breaktext.get.bind(data),
	breakup:breaktext.breakup.bind(data),
	move:breaktext.move.bind(data),
	join:breaktext.join.bind(data)
};