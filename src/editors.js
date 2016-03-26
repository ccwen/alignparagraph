var React=require("react");
var E=React.createElement;
var Editor=require("./editor");

var chinese=require("../model/chinese");
var tibetan=require("../model/tibetan");
var Editors = React.createClass({
	getInitialState:function(){
		return {leftheights:[],rightheights:[]};
	}
	,setSameHeight:function(side){
			var right=this.refs.right.getChildren();
			var left=this.refs.left.getChildren();
			var rightheights=[],leftheights=[],repaint=false;

			if (side==="left") {
				for (var i=0;i<right.length;i+=1) {
					if (left[i] && right[i].clientHeight < left[i].clientHeight){
						rightheights[i]=left[i].clientHeight;
						repaint=true;
					}				
				}
			}


			if (side==="right") {
				for (var i=0;i<left.length;i+=1) {
					if (right[i] && left[i].clientHeight < right[i].clientHeight){
						leftheights[i]=right[i].clientHeight;
						repaint=true;
					}
				}
			}

			if (repaint) this.setState({rightheights:rightheights,leftheights:leftheights});
	}
	,onUpdate:function(side){
		this.setSameHeight(side);
	}
	,componentDidMount:function(){
		this.setSameHeight("right");
		this.setSameHeight("left");
	}	
  ,render: function() {
    return E("div",{style:{display:"flex",flexDirection:"row"}},
          E("span",{style:{flex:1}}, 
          			E(Editor,{ref:"right",data:chinese,toolbarHeight:240,side:"right",
          				heights:this.state.rightheights,onUpdate:this.onUpdate})),
          E("span",{style:{flex:1}}, 
          	E(Editor,{ref:"left",data:tibetan,toolbarHeight:240,side:"left",
          		heights:this.state.leftheights,onUpdate:this.onUpdate}))
      )
  }
});
module.exports=Editors;