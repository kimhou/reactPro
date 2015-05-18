
var Hello = React.createClass({
	render: function(){
		return (
			<h1>Hello React</h1>
			);
	}
});
React.render(<Hello/>, document.getElementById('div1'));


var HelloProps = React.createClass({
	render: function(){
		return (
			<h1>Hello {this.props.name}</h1>
			);
	}
});
React.render(<HelloProps name='pony'/>, document.getElementById('div2'));


var QianTao = React.createClass({
	render: function(){
		return (
			<div>
				<p>嵌套与组合</p>
				<HelloProps name='QianTao'/>
				<Hello></Hello>
			</div>
			);
	}
});
React.render(<QianTao/>, document.getElementById('div3'));

