import React from "react";
import {render} from "react-dom";

//引入我们编写的组件
import App from "./App.js";

//使用、挂载组件，两个参数
//第一个参数是jsx语法
//第二个参数表示组件挂在哪里
render(
	<div>
		<App></App>
	</div> , 
	document.getElementById("app-container")
);