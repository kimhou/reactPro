var Hello = React.createClass({displayName: "Hello",
	render: function(){
		return (
			React.createElement("h1", null, "hello ", [this.props.name,React.createElement("span", null, "b")])
			);
	}
});

React.render(React.createElement(Hello, React.__spread({},  {name:'React'})), document.getElementById('container'));