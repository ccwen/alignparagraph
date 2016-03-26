var raw=require('../data/tibetan');
var breaktext=require("./breaktext");

var data={
	breakpoints:[],
	order:[],
	raw:raw
}

breaktext.init.call(data,/[ །]+/g);

module.exports={
	setOrder:breaktext.setOrder.bind(data),
	get:breaktext.get.bind(data),
	breakup:breaktext.breakup.bind(data),
	move:breaktext.move.bind(data),
	join:breaktext.join.bind(data)
};