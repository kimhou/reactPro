var Hello = React.createClass({displayName: "Hello",
	render: function(){
		return (
			React.createElement("h1", null, "hello")
			);
	}
});

React.render(React.createElement(Hello, null), document.getElementById('container'));