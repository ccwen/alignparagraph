var React=require("react");
var E=React.createElement;
var Editors=require("./editors");

var maincomponent = React.createClass({
  render: function() {
    return E("div",{style:{display:"flex",flexDirection:"column"}},
    			E("div",{style:{height:"120px",backgroundColor:"#202020"}},"toolbar"),
    			E(Editors) 
      )
  }
});
module.exports=maincomponent;