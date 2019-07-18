import React from "react";
import Bar from "./components/Bar/Bar.js";
import "./app.less";

class App extends React.Component{
 	constructor(){
 		super();
 		
 		this.state = {
 			r : 110,
 			g : 220,
 			b : 130
 		}

 		//三个Bar的实例
 		this.bars = ["r","g","b"].map((item,index)=>{
 			return <Bar key={index} v={this.state[item]} color={item} setColor={(this.setColor).bind(this)} />;
 		});
 	}

 	//设置函数，可以设置color颜色为value
 	setColor(color,value) {
 		this.setState({[color] : value});
 	}

 	render(){
 		return (
 			<div>
 				<div className="box" style={{"backgroundColor" : `rgb(${this.state.r},${this.state.g},${this.state.b})`}}></div>
 				{this.bars}
 			</div>
 		)
 	}
}

//向外暴露
export default App;