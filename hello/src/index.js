var Hello = React.createClass({	render: function(){		return (			<h1>Hello React</h1>			);	}});React.render(<Hello/>, document.getElementById('div1'));var HelloProps = React.createClass({	render: function(){		return (			<h1>Hello {this.props.name}</h1>			);	}});React.render(<HelloProps name='pony'/>, document.getElementById('div2'));var Child = React.createClass({	render: function(){		return(			<div style={{background:'#fff'}}>				<p>嵌套</p>				<p>I am parent</p>				{this.props.children}			</div>			);	}});var QianTao = React.createClass({	render: function(){		return (			<div>				<p>component组合&嵌套</p>				<div>					<p>组合</p>					<HelloProps name='QianTao'/>					<Hello></Hello>				</div>				<Child><HelloProps name='I am children'/></Child>			</div>			);	}});React.render(<QianTao/>, document.getElementById('div3'));var HelloLife = React.createClass({	getInitialState: function(){		return {defaultState: 'defaultState'};	},	getDefaultProps: function(){		return {defaultName:'defaultName'};	},	//将渲染	componentWillMount: function(){	},	//dom渲染完成	componentDidMount: function(){	},	//被移除时	componentWillUnmount: function(){	},	render: function(){		return (			<h1>Hello {this.props.name}, {this.props.defaultName}, {this.state.defaultState}</h1>			);	}});React.render(<HelloLife name='settedName'/>, document.getElementById('div4'));var HelloEvent = React.createClass({	getInitialState: function(){		return {defaultState: 'defaultState'};	},	getDefaultProps: function(){		return {defaultName:'defaultName'};	},	onButtonClicked: function(){		this.setState({clickInfo:'you clicked '+new Date()});	},	render: function(){		return (				<div>					<h1>事件</h1>					<button onClick={this.onButtonClicked}>click me</button>					<h1>Hello {this.props.name}, {this.props.defaultName}, {this.state.defaultState}</h1>					<p style={{color:'red'}}>{this.state.clickInfo}</p>				</div>			);	}});var com = React.render(<HelloEvent name='settedName'/>, document.getElementById('div5'));console.log(com)