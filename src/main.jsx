var React=require("react");
var E=React.createElement;
var Editors=require("./editors");
var helpmsg="Click to select a box, Enter to break at caret, "
+"Backspace to join with previous box, move Up/Down with Arrow Key for slave column";
var maincomponent = React.createClass({
		render: function() {
    return E("div",{style:{display:"flex",flexDirection:"column"}},

    			E("div",{style:{height:"120px"}},
    				helpmsg),
    			E(Editors) 
      )
  }
});
module.exports=maincomponent;