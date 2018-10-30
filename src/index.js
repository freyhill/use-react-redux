/**
 * @file: 打包整个业务文件
 * @author: leinov
 * @date: 2018-10-29
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";
import store from "./redux.js";

//监听
store.subscribe(()=>{
	ReactDOM.render(
  	<App />,
  	document.getElementById("root")
	);
});

ReactDOM.render(
	<App />,
	document.getElementById("root")
);
