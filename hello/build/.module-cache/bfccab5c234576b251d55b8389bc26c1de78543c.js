var Hello = React.createClass({displayName: "Hello",
	render: function(){
		return (
			React.createElement("h1", null, "Hello React")
			);
	}
});

React.render(React.createElement(Hello, null), document.getElementById('div1'));

var HelloProps = React.createClass({displayName: "HelloProps",
	render: function(){
		return (
			React.createElement("h1", null, "Hello ", this.props.name)
			);
	}
});

React.render(React.createElement(HelloProps, {name: "pony"}), document.getElementById('div2'));



var QianTao = React.createClass({displayName: "QianTao",
	render: function(){
		return (
			React.createElement(HelloProps, {name: "pony"})
			);
	}
});
React.render(qianTao, document.getElementById('div3'))