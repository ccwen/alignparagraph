var raw=require('../data/tibetan');
var items=raw.replace(/[ །]+/g,function(m){
	return m+"\n";
}).split("\n");

module.exports=items.map(function(m,idx){
	return [idx+1,m];
})
