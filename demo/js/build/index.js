var Hello = React.createClass({displayName: "Hello",
	render: function(){
		return(
			React.createElement("div", null, "hello")
			);
	}
});
React.render(React.createElement(Hello, null), document.body)