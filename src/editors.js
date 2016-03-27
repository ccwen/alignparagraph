var React=require("react");
var E=React.createElement;
var Editor=require("./editor");

var chinese=require("../model/chinese");
var tibetan=require("../model/tibetan");
var aligntext=require("../model/aligntext");
var Editors = React.createClass({
	getInitialState:function(){
		return {leftheights:[],rightheights:[],master:"left"};
	}
	,setSameHeight:function(){
			var right=this.refs.right.getChildren();
			var left=this.refs.left.getChildren();
			var rightheights=[],leftheights=[],repaint=false;

			for (var i=0;i<right.length;i+=1) {
				if (left[i] && right[i].clientHeight < left[i].clientHeight){
					rightheights[i]=left[i].clientHeight;
					repaint=true;
				}	 else {
					rightheights[i]=right[i].clientHeight;
				}
			} 
			for (var i=0;i<left.length;i+=1) {
				if (right[i] && left[i].clientHeight < right[i].clientHeight){
					leftheights[i]=right[i].clientHeight;
					repaint=true;
				} else {
					leftheights[i]=left[i].clientHeight;
				}
			}

			if (repaint) this.setState({rightheights:rightheights,leftheights:leftheights});
	}
	,clearHeight:function(cb){
			this.setState({rightheights:[],leftheights:[]},cb);
	}
	,onUpdate:function(){
		this.setSameHeight();
	}
	,setOrder:function(side) {
		if (side==="left") {
			aligntext(chinese,tibetan);
		} else if (side==="right"){
			aligntext(tibetan,chinese);	
		}
		this.setState({rightheights:[],leftheights:[],master:side},function(){
			this.setSameHeight();
		}.bind(this));
	}
	,componentDidMount:function(){
		this.setSameHeight();
	}
  ,render: function() {
    return E("div",{style:{display:"flex",flexDirection:"row"}},
          E("span",{style:{flex:1}}, 
          			E(Editor,{ref:"left",data:chinese,toolbarHeight:240,setOrder:this.setOrder,
          				clearHeight:this.clearHeight,side:"left",master:this.state.master,
          				heights:this.state.leftheights,onUpdate:this.onUpdate})),
          E("span",{style:{flex:1}}, 
          	E(Editor,{ref:"right",data:tibetan,toolbarHeight:240,setOrder:this.setOrder,
          		clearHeight:this.clearHeight,side:"right",master:this.state.master,
          		heights:this.state.rightheights,onUpdate:this.onUpdate}))
      )
  }
});
module.exports=Editors;