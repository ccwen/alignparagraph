var React=require("react");
var E=React.createElement;
var Editor=require("./editor");

var Editors = React.createClass({
  render: function() {
    return E("div",{style:{display:"flex",flexDirection:"row"}},
          E("span",{style:{flex:1}}, E(Editor,{toolbarHeight:240,text:"abc"})),
          E("span",{style:{flex:1}}, E(Editor,{toolbarHeight:240,text:"xyz"}))
      )
  }
});
module.exports=Editors;