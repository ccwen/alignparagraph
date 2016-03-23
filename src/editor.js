var React=require("react");
var E=React.createElement;
var KsanaCodeMirror=require("ksana-codemirror").Component;

var Editor=React.createClass({
	componentDidMount:function(){
		this.refs.editor.getCodeMirror().setOption("theme", "ambiance");
		var body = document.body;
		console.log(body.scrollHeight)
		this.refs.editor.getCodeMirror().setSize(null,body.scrollHeight-(this.props.toolbarHeight||0))
	}
	,render:function(){
		return E(KsanaCodeMirror,{ref:"editor",value:this.props.text});
	}
});
module.exports=Editor;