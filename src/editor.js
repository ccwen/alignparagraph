var React=require("react");
var E=React.createElement;

var SortableListItem=require("./sortableitem");


var Editor=React.createClass({
	getInitialState:function(){
		return {data:{items:this.props.data}};
	}
  ,sort: function(items, dragging) {
    var data = this.props.data;
    data.items = items;
    data.dragging = dragging;
    this.setState({data: data});
  }
	,render:function(){
		
		  return E("div",{},this.state.data.items.map(function(item, i) {
	      return E(SortableListItem,{ sort:this.sort, data:this.state.data,key:i,"data-id":i,item:item})
   		},this));
	}
});
module.exports=Editor;