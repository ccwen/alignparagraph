var React=require("react");
var E=React.createElement;
var Sortable=require("react-sortable");
var SortableListItem = React.createClass({
  mixins: [Sortable],
  render: function() {
  	var props=Object.assign({},this.props,{className:this.isDragging() ? "dragging" : ""
  	,"data-id":this.props["data-id"],draggable:true,
  	onDragEnd:this.sortEnd,onDragOver:this.dragOver,onDragStart:this.sortStart});
  	return  E("div", props,this.props.item[0],this.props.item[1]);
  }
});

module.exports=SortableListItem;