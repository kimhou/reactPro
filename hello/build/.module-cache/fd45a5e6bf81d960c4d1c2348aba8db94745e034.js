var Hello = React.createClass({displayName: "Hello",	render: function(){		return (			React.createElement("h1", null, "Hello React")			);	}});var comp1 = React.createElement("div", {style: {background:'red'}}, "ele1");React.render(React.createElement(Hello, null), document.getElementById('div1'));var HelloProps = React.createClass({displayName: "HelloProps",	render: function(){		return (			React.createElement("h1", null, "Hello ", this.props.name)			);	}});React.render(React.createElement(HelloProps, {name: "pony"}), document.getElementById('div2'));var Child = React.createClass({displayName: "Child",	render: function(){		return(			React.createElement("div", {style: {background:'#fff'}}, 				React.createElement("p", null, "嵌套"), 				React.createElement("p", null, "I am parent"), 				this.props.children			)			);	}});var QianTao = React.createClass({displayName: "QianTao",	render: function(){		return (			React.createElement("div", null, 				React.createElement("p", null, "component组合&嵌套"), 				React.createElement("div", null, 					React.createElement("p", null, "组合"), 					React.createElement(HelloProps, {name: "QianTao"}), 					React.createElement(Hello, null)				), 				React.createElement(Child, null, React.createElement(HelloProps, {name: "I am children"}))			)			);	}});React.render(React.createElement(QianTao, null), document.getElementById('div3'));var LifeCircle = React.createClass({displayName: "LifeCircle",	//组件类创建时调用一次	getDefaultProps: function(){		console.log('getDefaultProps');		return {defaultName:'defaultName'};	},	//组件实例化挂载之前调用一次	getInitialState: function(){		console.log('getInitialState');		return {defaultState: 'defaultState'};	},	//初始化渲染之前调用一次	componentWillMount: function(){		console.log('componentWillMount');	},	//初始化渲染完成时调用一次	componentDidMount: function(){		console.log('componentDidMount');		setInterval(this.handleUpdate, 1000);	},	//更新前调用	componentWillUpdate: function(){		console.log('componentWillUpdate');	},	//更新完成调用	componentDidUpdate: function(){		console.log('componentDidUpdate');	},	//被移除时调用	componentWillUnmount: function(){		console.log('componentWillUnmount');	},	//自定义事件	handleUpdate: function(){		console.log('handleUpdate');		this.setState({update:new Date()+''});	},	//更新时调用	render: function(){		console.log('render');		return (			React.createElement("div", null, 				React.createElement("h1", null, "Hello ", this.props.name, ", ", this.state.update)			)			);	}});React.render(React.createElement(LifeCircle, {name: "LifeCircle"}), document.getElementById('div4'));var HelloEvent = React.createClass({displayName: "HelloEvent",	getInitialState: function(){		return {defaultState: 'defaultState'};	},	getDefaultProps: function(){		return {defaultName:'defaultName'};	},	onButtonClicked: function(){		this.setState({clickInfo:'you clicked '+new Date()});	},	render: function(){		return (				React.createElement("div", null, 					React.createElement("h1", null, "事件"), 					React.createElement("button", {onClick: this.onButtonClicked}, "click me"), 					React.createElement("h1", null, "Hello ", this.props.name, ", ", this.props.defaultName, ", ", this.state.defaultState), 					React.createElement("p", {style: {color:'red'}}, this.state.clickInfo)				)			);	}});var com = React.render(React.createElement(HelloEvent, {name: "settedName"}), document.getElementById('div5'));console.log(com)