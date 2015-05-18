
var Hello = React.createClass({displayName: "Hello",
	render: function(){
		return (
			React.createElement("h1", null, "Hello React")
			);
	}
});
React.render(React.createElement(Hello, null), document.getElementById('div1'));


var HelloProps = React.createClass({displayName: "HelloProps",
	getInitialState: function(){

	},
	getDefaultProps: function(){
		return {defaultName:'defaultName'};
	},
	render: function(){
		return (
			React.createElement("h1", null, "Hello ", this.props.name, ", ", this.props.defaultName)
			);
	}
});
React.render(React.createElement(HelloProps, {name: "pony"}), document.getElementById('div2'));


var QianTao = React.createClass({displayName: "QianTao",
	render: function(){
		return (
			React.createElement("div", null, 
				React.createElement("p", null, "嵌套与组合"), 
				React.createElement(HelloProps, {name: "QianTao"}), 
				React.createElement(Hello, null)
			)
			);
	}
});
React.render(React.createElement(QianTao, null), document.getElementById('div3'));

