var Hello = React.createClass({displayName: "Hello",
	render: function(){
		return (
			React.createElement("h1", null, "hello ", [this.props.name])
			);
	}
});

React.render(React.createElement(Hello, React.__spread({},  {name:'React'})), document.getElementById('container'));