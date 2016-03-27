var React=require("react");
var E=React.createElement;

var Toolbar=React.createClass({
	onChange:function(){
		if (this.props.side!==this.props.master) this.props.lockSide(this.props.side);
	}
	,render:function(){
		return E("span",{},E("label",{},
			E("input",{checked:this.props.master==this.props.side,onChange:this.onChange,
				type:"radio",name:"master",value:this.props.side}),"Master"));
	}
})

module.exports=Toolbar;