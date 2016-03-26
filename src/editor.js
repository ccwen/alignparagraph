var React=require("react");
var E=React.createElement;

var SortableListItem=require("./sortableitem");


var Editor=React.createClass({
	getInitialState:function(){
		return {data:{items:this.props.data.get()}};
	}
	,update:function(){
  	var data=this.state.data;
  	data.items=this.props.data.get();
    this.setState({data: data});
  }
  ,breakup:function(i,at){
  	this.props.data.breakup(i,at);
  	this.update();
  }
  ,move:function(i,direction) {
  	this.props.data.move(i,direction);
  	this.update();
  }
  ,join:function(i) {
  	this.props.data.join(i);
  	this.update();
  }
	,render:function(){
		
		  return E("div",{},this.state.data.items.map(function(item, i) {
	      return E(SortableListItem,{ 
	      	breakup:this.breakup,
	      	move:this.move,
	      	data:this.state.data,
	      	join:this.join,
	      	key:i,"data-id":item[0],item:item})
   		},this));
	}
});
module.exports=Editor;