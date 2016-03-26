var React=require("react");
var E=React.createElement;

var SortableListItem=require("./sortableitem");


var Editor=React.createClass({
	getInitialState:function(){
		return {data:{items:this.props.data.get()},heights:this.props.heights};
	}
	,componentWillReceiveProps:function(nextProps){
			this.setState({heights:nextProps.heights});
	}
	,update:function(){
  	var data=this.state.data;
  	data.items=this.props.data.get();

    this.setState({data: data,heights:[]},function(){
    	this.props.clearHeight(function(){
    		this.props.onUpdate();
    	}.bind(this));
    }.bind(this));
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
  ,getChildren:function(){
  	var nodes=this.refs.self.childNodes;
  	return [].map.call(nodes,function(node){
  			return node;
  	});
  }
	,render:function(){
		  return E("div",{ref:"self"},this.state.data.items.map(function(item, i) {
		  	var opts={
	      	breakup:this.breakup,
	      	move:this.move,
	      	data:this.state.data,
	      	join:this.join,
	      	idx:i,
	      	key:i,"data-id":item[0],item:item
		  	};

		  	if (this.state.heights[i]) opts.height=this.state.heights[i];

	      return E(SortableListItem,opts)
   		},this));
	}
});
module.exports=Editor;