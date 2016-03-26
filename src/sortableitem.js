var React=require("react");
var E=React.createElement;

var allowKeys={ArrowRight:true,ArrowLeft:true};
var SortableListItem = React.createClass({
  getInitialState:function(){
  	return {editable:false};
  }
  ,toggleEditable:function(){
  	this.setState({editable:!this.state.editable})
  }
  ,onKeyUp:function(evt){
  	
  }
  ,getSelStart:function(){
  		var sel=window.getSelection();
  		var range = sel.getRangeAt(0);
  		return range.startOffset;

  }
  ,onKeyDown:function(evt){
  	var row=parseInt(this.props["data-id"]);

  	if (!allowKeys[evt.key]) evt.preventDefault();
  	if (evt.key==="Escape") this.onBlur();
  	if (evt.key==="Backspace") this.props.join(row);
  	if (evt.key==="ArrowUp") this.props.move(row,-1);
		if (evt.key==="ArrowDown") this.props.move(row,1);
  	if (evt.key==="Enter") {
  			var sel=this.getSelStart();
				this.props.breakup(row,sel);
  	}
  }
  ,componentWillReceiveProps:function(){
  	this.setState({editable:false});
  }
  ,onKeyPress:function(evt){

  }
  ,onBlur:function(){
  	this.setState({editable:false});
  }
  ,selectRow:function(){
		var self=this.refs.self;
		var range = document.createRange();
 		range.setStart(self, 0);
 		range.setEnd(self, 0);

		self.focus();
		var sel=window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
  }
  ,componentDidUpdate:function(){
  	this.refs.self.contentEditable=JSON.stringify(this.state.editable);
  	if (this.state.editable) this.selectRow();
  }
  ,defaultProps:function(){
  	return {onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,
  		onKeyPress:this.onKeyPress,ref:"self",onBlur:this.onBlur};
  }
  ,render: function() {
  	var props=Object.assign(this.defaultProps(),this.props,
  	{"data-id":this.props["data-id"],draggable:true,
  	onDragEnd:this.sortEnd,onDragOver:this.dragOver,onDragStart:this.sortStart});
  	if (!this.state.editable) props.onClick=this.toggleEditable;

  	return  E("div", null,
  		E("span",{},1+this.props.item[0]),

  		E("span",props,this.props.item[1]));
  }
});

module.exports=SortableListItem;