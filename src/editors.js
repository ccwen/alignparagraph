var React=require("react");
var E=React.createElement;
var Editor=require("./editor");

var chinese=require("../model/chinese");
var tibetan=require("../model/tibetan");
var Editors = React.createClass({
  render: function() {
    return E("div",{style:{display:"flex",flexDirection:"row"}},
          E("span",{style:{flex:1}}, E(Editor,{data:chinese,toolbarHeight:240})),
          E("span",{style:{flex:1}}, E(Editor,{data:tibetan,toolbarHeight:240}))
      )
  }
});
module.exports=Editors;