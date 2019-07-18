import React from "react";
import "./css.less";
import {PropTypes} from "prop-types";
 
class Bar extends React.Component{
 	constructor(props){
 		super();
 		
 		this.state = {
 			v : props.v
 		}

 		//绑定this
 		this.change = (this.change).bind(this);

 		this.setColor = props.setColor;
 	}

 	//改变
 	change(event){
 		this.setState({"v" : parseInt(event.target.value)});

 		this.setColor(this.props.color , this.state.v);
 	}

 	render(){
 		return (
 			<div className="Bar_kaola">
 				<div className="bar">
 					{this.props.color} :
 					<input type="range" min="0" max="255" value={this.state.v} onChange={this.change}/>
 					<input type="number" min="0" max="255" value={this.state.v} onChange={this.change}/>
 				</div>
 			</div>
 		)
 	}
}

Bar.propTypes = {
	v 	: PropTypes.number.isRequired,
	color : PropTypes.string.isRequired,
	setColor : PropTypes.func.isRequired
}



//向外暴露
export default Bar;