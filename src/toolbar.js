var React=require("react");
var E=React.createElement;

var Toolbar=React.createClass({
	onChange:function(){
		if (this.props.side!==this.props.master) this.props.lockSide(this.props.side);
	}
	,render:function(){
		var master=this.props.master==this.props.side;
		return E("span",{},E("label",{},
			E("input",{checked:master,onChange:this.onChange,
				type:"radio",name:"master",value:this.props.side}),master?"Master":"Slave"));
	}
})

module.exports=Toolbar;